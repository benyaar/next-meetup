import { db } from '../helpers/mongodb'
import MeetupList from '../components/meetups/MeetupList'

function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups} />
    )

}

export async function getStaticProps(){
    const data = await db.collection('meetups').find().toArray()
    return {
        props: {
            meetups: data
        },
        revalidate:1
    }
}

export default HomePage