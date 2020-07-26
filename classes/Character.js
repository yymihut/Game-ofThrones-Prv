export class Character {
    constructor(
        characterName, 
        houseName, 
        /* characterImageThumb, */ 
        characterImageFull, 
        actorName, 
        nickname
        ) {
        this.characterName = characterName;
        this.houseName = houseName;
        /* this.characterImageThumb = characterImageThumb; */
        this.characterImageFull = characterImageFull;
        this.actorName = actorName;
        this.nickname = nickname;
    }
    render() {
        const characterElement = document.createElement('div');
        characterElement.setAttribute('class', 'character-cards');
        characterElement.innerHTML = `<h1 id="characterName">${this.characterName}</h1>
                                   <p id="houseName">House Name:  ${this.houseName}<br></p>
                                    <p id="actorName">Actor Name:  ${this.actorName}</p>
                                    <p id="nickname">Nickname:  ${this.nickname}</p>
                                    <img src='${this.characterImageFull}' alt='no picture'/>`;
        return characterElement;
    }
}