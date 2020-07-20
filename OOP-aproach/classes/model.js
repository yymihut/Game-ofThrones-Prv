import { HouseElement } from "../classes/Houses.js";
import { FetchApi } from "../classes/FetchApi.js";
import { HouseMembers } from "../classes/Members.js";
import { Character } from "../classes/Character.js";
import { charactersGot } from '../assets/characters.js';


export const hookHouses = document.getElementById('hook-posts');
export const hookMembers = document.getElementById('modalH-body');
export const hookCharacters = document.getElementById('hook-posts');
export const hookSearch = document.getElementById('hook-posts');
const allHousesSwornMembersUrls = [];

export function showCharacters(prev, next) {
    hookHouses.innerHTML = '';
    hookCharacters.innerHTML = '';
    charactersGot.characters.slice(prev, next).map(element => {
        if (element.characterImageFull) {
            const character = new Character(
                element.characterName,
                element.houseName,
                element.characterImageFull,
                element.actorName,
                element.nickname,
            );
            const characterNode = character.render();
            hookCharacters.appendChild(characterNode);
        }
    })
}

export function sarchCharacters(search) {

    let lowerNames = charactersGot.characters.map(function (a) {
        a.characterName = a.characterName.toLowerCase();
        return a;
    });

    let searchChar = lowerNames.filter(obj => {
        console.log('obj.characterName.includes(search)', obj.characterName.includes(search))
        if (obj.characterName.includes(search)) {
            return obj.characterName
        }
    });
    console.log('charactersGot.characters ', lowerNames);
    console.log('let searchChar = charactersGot.characters.filter(obj ', searchChar);
    console.log('inputul search---->', search)
    hookHouses.innerHTML = '';
    hookCharacters.innerHTML = '';
    if (!searchChar.length) {
        const alert = document.createElement('div');
        alert.innerHTML = `<p>There is no actor with this name.. sorry !</p>`
        hookSearch.appendChild(alert);
    }

    searchChar.map(element => {
        const character = new Character(
            element.characterName,
            element.houseName,
            element.characterImageFull,
            element.actorName,
            element.nickname,
        );
        const searchNode = character.render();
        hookSearch.appendChild(searchNode);
    })
}



export async function displayHouses(pgNo) {
    let houses = `https://www.anapioficeandfire.com/api/houses?page=${pgNo}&pageSize=10`;
    const fetchHouses = new FetchApi(houses);
    const arrayResponse = await fetchHouses.fetchData();
    console.log('dupa await ', arrayResponse);


    hookHouses.innerHTML = '';
    for (let i = 0; i < arrayResponse.length; i++) {
        const house = new HouseElement(i, arrayResponse[i].name, arrayResponse[i].coatOfArms,
            arrayResponse[i].region, arrayResponse[i].words, arrayResponse[i].swornMembers);
        const houseNode = house.render();
        allHousesSwornMembersUrls.push(arrayResponse[i].swornMembers);
        hookHouses.appendChild(houseNode);
    };
}

export async function displayCharacters(id, houseName) {
    let swornMemberUrl = [...allHousesSwornMembersUrls[id]];
    const membersInfo = [];
    const title = new HouseElement(0, houseName);    //afisare titlu casei in DOM
    title.addModalTitle();
    for (let i = 0; i < swornMemberUrl.length; i++) {
        const fetchCharacters = new FetchApi(swornMemberUrl[i]);
        const arrayResponse = await fetchCharacters.fetchData();
        membersInfo.push(arrayResponse);
        hookMembers.innerHTML = `<div class="spinner-border text-muted"></div>`;
    }
    hookMembers.innerHTML = '';
    if (membersInfo.length) {
        for (let i = 0; i < membersInfo.length; i++) {
            const houseCharacter = new HouseMembers(membersInfo[i].name, membersInfo[i].culture,
                membersInfo[i].born, membersInfo[i].titles, membersInfo[i].aliases,
                membersInfo[i].playedBy);
            const memberNode = houseCharacter.render();    //afisarea caract in DOM
            hookMembers.appendChild(memberNode);
        }
        console.log(swornMemberUrl)
    } else {
        const msg = new HouseElement(0, houseName);
        msg.message();
    }
    membersInfo.splice(0, membersInfo.length);
}