import styles from "./NotFoundBlock.module.scss"
function Index(){
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const emojyArr= ["😭","😤","😡","🤬","😳","🙄","😬","😞","😒","😔","😟","😕","🙁","🙃","👺","👹","👿"]
    return (<div className={styles.root}>
        <h1 className={styles.rootTitle}>Такой страницы не существует<br/>{emojyArr[getRandomInt(emojyArr.length)]}</h1>
        <p className={styles.rootDescr}>Пожалуйста проверьте правильность написания или повторите попытку попозжe </p>
    </div>)
}
export default Index