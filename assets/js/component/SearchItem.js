import html from '../core/core.js'

export default function SearchItem({firstName, lastName, gender, telephone, place, hobbies, des}){
    return html`<tr>
                   <td>${firstName}</td>
                   <td>${lastName}</td>
                   <td>${gender}</td>
                   <td>${telephone}</td>
                   <td>${place}</td>
                   <td>${hobbies}</td>
                   <td>${des}</td>
                </tr>`
}