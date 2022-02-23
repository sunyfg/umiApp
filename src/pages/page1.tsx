import { Link } from 'umi'
import styles from './index.less';

export default function IndexPage() {
  return (
    <main>
      <h1 className={styles.title}>Page 1</h1>
      <Link to={'/page2'}>Page 2</Link>
    </main>
  );
}
