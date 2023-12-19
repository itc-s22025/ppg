import s from './page.module.css'
import SignUpFrame from './signUpFrame.js'
import Image from 'next/image'

const Main = () => {
        return(
		<>
				<div className={s.all}>
				<Image src="/muscleOrange.png" width={400} height={180} className={s.image} alt="Muscle Orange"/>
				<SignUpFrame title="Sign Up" />
				</div>
                </>
        )
}

export default Main
