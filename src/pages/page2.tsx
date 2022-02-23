import { Link } from "umi";
import styles from './index.less';

export default function IndexPage() {
  return (
    <main>
      <h1 className={styles.title}>Page 2</h1>
      <Link to={'/'}>Home</Link>
    </main>
  );
}
