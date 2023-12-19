import s from './page.module.css'
import SignInFrame from './SignInFrame.js'
import Image from 'next/image'

const SignIn = () => {
        return(
                <>
		    <div className={s.all}>
		    <Image src="/MUSCLE_WHITE.png" width={400} height={180} className={s.image} alt="Muscle White"/>
		    <SignInFrame title="Sign In" />
		    </div>
		</>
        )
}

export default SignIn
