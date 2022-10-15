import html from '../core/core.js'
import SearchItem from './SearchItem.js'
export default function SearchList({visitors}){
    return html`<div class="body-content">
                    <table class="table content-table w-100 mt-2 ${visitors.length > 0 ? "" : 'no-row'}">
                        <thead>
                            <tr>
                                <th width = "10%">First name</th>
                                <th width = "10%">Last name</th>
                                <th width = "5%">Gender</th>
                                <th width = "10%">Telephone</th>
                                <th width = "10%">You're in</th>
                                <th width = "10%">Hobbies</th>
                                <th width = "45%">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${visitors.map((visitor => SearchItem(visitor))).join('')}
                        </tbody>
                    </table>
                </div> `
}