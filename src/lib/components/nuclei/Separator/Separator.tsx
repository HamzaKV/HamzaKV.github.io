import styles from './styles.module.css';
import type { Component } from 'src/lib/types/component';

const Separator: Component = ({ children }) => (
    <div className={styles.separator}>{children as React.ReactNode}</div>
);

export default Separator;
