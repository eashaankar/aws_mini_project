import {useState} from 'react';
import '../App.css';


function Info(){

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }

    return(
        <div className='accordian'>
        {data.map((item,i) => (
            <div className='item'>
                <div className="title" onClick={() => toggle(i)}>
                    <h2>{item.heading}</h2>
                </div>
                <div className={selected === i ? 'content show' : 'content'}>{item.content}</div>
                </div>
        ))}
        </div>
)
}

const data =[
    {
        heading:'Route 53',
        content: <p>Amazon Route 53 is a scalable and highly available cloud Domain Name System (DNS) web service provided by Amazon Web Services (AWS). It allows you to manage and route traffic for your domain names to AWS resources and other internet applications. Route 53 provides features such as domain registration, DNS routing, health checking, and DNS query logging.</p>
    },
    {
        heading:'ACM',
        content:<p>Amazon Certificate Manager (ACM) is a service provided by Amazon Web Services (AWS) that simplifies the process of managing and deploying SSL/TLS certificates for your applications and websites. ACM provides a highly scalable and reliable infrastructure to provision, manage, and renew SSL/TLS certificates, enabling secure communication between clients and your applications.</p>,
    },
    {
        heading:'Cloudfront',
        content: <p>Amazon CloudFront is a content delivery network (CDN) provided by Amazon Web Services (AWS). It is designed to deliver content, including web pages, videos, images, and other files, to users with low latency and high transfer speeds. CloudFront helps improve the performance and scalability of web applications by caching content at edge locations around the world.
        </p>
    },
    {
        heading:'S3 bucket',
        content: <p>Amazon Simple Storage Service (S3) is a scalable and highly durable object storage service provided by Amazon Web Services (AWS). It allows you to store and retrieve any amount of data from anywhere on the web. S3 provides a simple web services interface that enables developers to store and retrieve data easily, making it a popular choice for a wide range of applications.</p>
    },
]

export default Info;