import MeetupList from '../components/meetups/MeetupList'
const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://assets.simpleviewinc.com/sv-atlantic-city/image/upload/c_limit,h_1200,q_75,w_1200/v1/cms_resources/cms_resources/clients/meetac/TIDALWAVE2022_0813_195905_7278_ALIVECOVERAGE_7f2d4f26-2716-4507-adc1-4875f139f1ea.jpg',
        address: 'Spain',
        description: 'This is a first meetup'
    }
]

function HomePage() {
    return (
        <MeetupList meetups={DUMMY_MEETUPS} />
    )

}

export default HomePage