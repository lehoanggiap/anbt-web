import html from '../core/core.js'

export default function VisitForm(){
    return html`
                <div class="body-content">
                    <div class="form-container">
                        <form action="" id="form-visit">
                            <div class="input-group mt-3">
                                <label class="input-label">Username:</label>
                                <div>
                                    <input type="text" name="firstName" class="form-control"
                                    aria-describedby="input-group-left">
                                </div>
                        
                            </div>
                            <div class="input-group mt-3">
                                <label class="input-label">Password:</label>
                                <div>
                                    <input type="password" name="password" class="form-control"
                                    aria-describedby="input-group-left">
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-register mt-4 border-dark">Log in</button>
                        </form>
                    </div>
                </div>`
}