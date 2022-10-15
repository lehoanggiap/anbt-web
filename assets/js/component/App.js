import html from '../core/core.js'
import Header from './Header.js'
import VisitForm from './VisitForm.js'
import SearchForm from './SearchForm.js'

export default function App(data){
    return html`
    ${Header()}
    <div class="app-body">
    <div class="body-head">
    <h2 id = "login" style = "cursor:pointer">Login page</h2>
    <h2 id="homepage" style = "cursor:pointer">Go to list data</h2>
</div>
    ${VisitForm(data)}
    </div>
    `
}