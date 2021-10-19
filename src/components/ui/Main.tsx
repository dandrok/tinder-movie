import { useEffect, useState, useCallback } from 'react'
import styles from './Main.module.css'
// import movies from '../../moviess.json'

const Main = () => {
  const [projects, setProjects] = useState<any[]>([])

  const fetchJSONDataFrom = useCallback(async (path) => {
    const response = await fetch(path, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const data = await response.json()
    setProjects(data)
  }, [])

  useEffect(() => {
    fetchJSONDataFrom('/moviess.json')
  }, [fetchJSONDataFrom])

  // const [list, updateList] = useState(projects)

  const handleRemoveItem = (e: any) => {
    const id = e.target.getAttribute('id')
    setProjects(projects.filter((item) => item.id !== id))
  }

  return (
    <div className={styles.container}>
      <ul className={styles.rel}>
        {projects.map(({ id, title, imageURL, rating, summary }) => (
          <li className={styles.abs} key={id}>
            <div className={styles.container__title}>
              <p className={styles.rating}>
                {title} -&nbsp;
                <span
                  style={rating > 7 ? { color: 'green' } : { color: 'red' }}
                >
                  {rating}
                </span>
                /10
              </p>
            </div>

            <div className={styles.img}>
              <img src={imageURL} alt={title} />
            </div>
            <div>
              <p>{summary}</p>
            </div>
            <div className={styles.container__btns}>
              <button
                className={styles.btn__accept}
                id={id}
                onClick={handleRemoveItem}
              >
                Accept
              </button>
              <button
                className={styles.btn__reject}
                id={id}
                onClick={handleRemoveItem}
              >
                Reject
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Main
