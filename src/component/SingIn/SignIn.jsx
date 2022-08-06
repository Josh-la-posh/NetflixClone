import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLearn: false
        }
    }

    learnMore(e) {
        this.setState({
            isLearn : !this.state.isLearn
        })
        var learn = e.target
        // console.log(learn)

        if (e.target.firstChild.textContent == "  Learn more.") {
            console.log(e.target)

            learn.outerHTML = "<br /><br /><div>The information collected by Google reCAPTCHA is subject to the Google <a target='_blank' href='https://policies.google.com/privacy'> Privacy Policy</a> and <a href='https://policies.google.com/terms' target='_blank'>Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</div>"

        }

    }

    render() { 
        return (
            <div className="login">
                <div className="login-wrapper">
                    <div className="login-background">
                        <img src="" alt="" className='concord-img' />
                    </div>
                    <div className="login-header">
                        <a href="/" className='login-header__link'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="" className='logo' />
                        </a>
                    </div>
                    <div className="login-body">
                        <div className="login-content">
                            <div className="login-form__main">
                                <h1>Sign In</h1>
                                <form className="login-form" method='post'>
                                    <div className="input-id">
                                        <input type="email" name='loginName' className="text-field" />
                                        <label className='signin-label' htmlFor="loginName">Email or phone number</label>
                                    </div>
                                    <div className="input-id">
                                        <input type="password" name='pass' className="text-field" />
                                        <label className='signin-label' htmlFor="pass">Password</label>
                                    </div>
                                    <button className="login-button" type='submit'>Sign In</button>

                                    <div className="login-form__help">
                                        <div className="remember-me">
                                            <input type="checkbox" name='rememberMe' />
                                            <label className='' htmlFor="rememberMe"><span>Remember me</span></label>
                                        </div>
                                        <a href="" className="login-help">Need help?</a>
                                    </div>
                                </form>
                            </div>
                            <div className="login-form__other">
                                <div className="signup">
                                    New to Netflix?
                                    <a href="/home">  Sign up now</a>.
                                </div>
                                <div className="terms-of-use">
                                    <p>
                                        <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. </span>
                                        <button className="term-button" onClick={(e)=>this.learnMore(e)}>  Learn more.</button>
                                    </p>
                                    <div className="nothing"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer nfooter">
                        <div className="line"></div>
                        <div className="site-footer">
                            <p className="footer-header"><a>Questions? Contact us.</a></p>
                            <ul className="footer-links">
                                <li className="footer-link__item"><a href="">FAQ</a></li>
                                <li className="footer-link__item"><a href="">Help Center</a></li>
                                <li className="footer-link__item"><a href="">Terms of Use</a></li>
                                <li className="footer-link__item"><a href="">Privacy</a></li>
                                <li className="footer-link__item"><a href="">Cookie Preferences</a></li>
                                <li className="footer-link__item"><a href="">Corporate Information</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SignIn;