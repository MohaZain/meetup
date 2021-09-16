import MainNavigation from "./MainNavigation";
import style from "./Layuot.module.css"
function Layuot(props){
    return <div>
        <MainNavigation/>
        <main className={style.main}>
            {props.children}
        </main>
    </div>
}
export default Layuot;