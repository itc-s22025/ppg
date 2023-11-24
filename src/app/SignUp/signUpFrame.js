import s from './page.module.css'

const SignUpFrame = ({title}) => {
        return(
                <>
                        <main>
                                <div className={s.boxLarge}>
                                        <h1 className={s.signUp}>{title}</h1>
                                        <p><input type="text" placeholder="User ID" className={s.box}/></p>
                                        <p><input type="password" minlength="8" placeholder="Password" required className={s.box}/></p>
                                        <p><input type="submit" value="NEXT" className={s.next} /></p>
                                </div>
                        </main>
                </>
        )
}

export default SignUpFrame

