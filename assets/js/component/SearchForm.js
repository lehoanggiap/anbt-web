import html from "../core/core.js";
import SearchList from "./SearchList.js";

export default function SearchForm(data){
    return html`<div class="body-head">
                    <h2>Visitor information</h2>
                    <form action="" id="form-visitors">
                        <div class="search-block m-3">
                            <div class="input-group w-0" style="align-items: center;">
                                <label class="input-label" style="padding: 6px; min-width: unset">Search: </label>
                                <div>
                                    <input type="text" name="first-name" class="form-control js-search-input"
                                    aria-describedby="input-group-left">
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary btn-search border-dark">Search</button>
                            <p class="ms-4" style="margin-bottom: 0;">(Type keyword and Click Search button)</p>
                        </div>

                    </form>
                </div>
                ${SearchList(data)}`
}