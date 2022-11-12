import { useEffect } from 'react'
import useStorageHook from '../custom-hooks/useStorageHook'
import { motion } from 'framer-motion';

const StatusBar = ({ file, setFile }) => {

  const { progress, url } = useStorageHook(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div className="status-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}></motion.div>
  )
}

export default StatusBar