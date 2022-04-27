import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from './../data/new.json'

export default function Home(data1) {
  const uploadToServer = async () => {        
    // const body = new FormData();
    // // console.log("file", image)
    // body.append("file", image);    
    const response = await fetch("/api/add")
  };
  console.log(data)
 

  return (
    <div>
       <button
          className="btn btn-primary"
        //   type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
        {data1.map((item, index) => (
          <div key={index}>
            <h1>{item.name}</h1>
            </div>
        ))}

    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      data: data1
    }, // will be passed to the page component as props
  }
}