import s from './page.module.css'
import Link from 'next/link'

const SignInFrame = ({title}) => {
	return(
		<>
		    <main>
		        <div className={s.boxLarge}>
		            <h1 className={s.SignIn}>{title}</h1>
			    <p><input type="text" placeholder= "User ID" className={s.box}/></p>
			    <p><input type="password" minlength="8" placeholder="Password" required className={s.box}/></p>
		 	    <p><input type="submit" value="SIGN IN" className={s.signin} /></p>
	     		</div>
			<div className={s.or}>
			    <p></p>
			    <p>OR</p>
			</div>
			<div className={s.boxLarge}>
			      <Link href="/SignUp">
			    <p><input type="submit" value="SIGN UP" className={s.signup} /></p>
			      </Link>
			</div>
		    </main>
		</>
	)
}

export default SignInFrame
