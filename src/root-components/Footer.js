import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
    return (
        <div>
            <div class="bg-dark text-center text-white">
                <div class="container p-4 pb-0">
                    <section class="">
                        <form action="">
                            <div class="row d-flex justify-content-center">
                                <div class="col-auto">
                                    <p class="pt-2">
                                        <strong>Sign up for other Benifits</strong>
                                    </p>
                                </div>

                                <div class="col-md-5 col-12">
                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="form5Example29" class="form-control" placeholder="Email address" />
                                    </div>
                                </div>

                                <div class="col-auto">
                                    <button type="submit" class="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
                <div class="text-center p-3">
                    © 2020 Copyright:
                    <a class="text-white" href="https://www.rheem.com/">Rheem.com</a>
                </div>
            </div>
        </div>
    )
}

Footer.propTypes = {

}

export default Footer

