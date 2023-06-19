import styles from './box.module.css'

export default function Box ({marque,model,color,price,removeItem, id}) {

    return (
    <div className={styles.box}>
        <div className={styles.delete} onClick={() => removeItem(id)} >X</div>
        <h2>{marque}</h2>
        <p>{model}</p>
        <p>{color}</p>
        <p>{price}$</p>
    </div>
    )
}