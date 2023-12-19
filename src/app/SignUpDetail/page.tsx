import s from './page.module.css'
import SignUpDetailFrame  from './signUpDetailFrame.js'
import Image from 'next/image'

const Main = () => {
        return(
		<>
				<div className={s.all}>
				<Image src="/muscleOrange.png" width={400} height={180} className={s.image} alt="Muscle Orange"/>
				<SignUpDetailFrame  title="Sign Up" />
				</div>
                </>
        )
}

export default Main
