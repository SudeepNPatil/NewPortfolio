import { MapPin, Calendar, Users, Timer } from 'lucide-react';
import bhiveworkspace1 from '../assets/bhive-workspace1.jpg';
import { Link } from 'react-router-dom';

export default function Meetups() {
  const meetups = [
    {
      id: 1,
      title: 'Reactjs Meetup',
      communityurl: 'https://www.meetup.com/reactjs-bangalore/',
      description: `I attended the React Bangalore meetup at
         the Quince office. I had a great time 
         connecting with new folks and talented engineers. 
         It was a great opportunity for freshers to connect with working professionals 
         and have conversations about project development and the tools they use.
          The time was well spent with tech-related talks and short introductions about ourselves.`,
      date: 'Dec 13 , 2025',
      time: '2pm to 6pm IST',
      location: 'Quince.com Bengalore karnataka india',
      locationUrl:
        'https://www.google.com/maps/search/?api=1&query=12.92093%2C%2077.68747',
      image:
        'https://secure.meetupstatic.com/photos/event/1/a/4/a/highres_531786730.webp',
      MeetupUrl:
        'https://www.meetup.com/reactjs-bangalore/events/311744342/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link&utm_version=v2&member_id=457927520',
    },
    {
      id: 2,
      title: 'Reactjs Meetup',
      communityurl: 'https://www.meetup.com/reactjs-bangalore/',
      description:
        'this is My first meetup  that I attended in Bengalore , in this meetup as a fresher in the industry i love to connect with the working professionals and ask some tips about Project development and this is the place we can connet with the folks and share knowledge.',
      date: 'January 25, 2025',
      time: '2pm to 6pm IST',
      location: 'NIMHANS Convention Centre Bengalore, Karnataka',
      locationUrl:
        'https://www.google.com/maps/search/?api=1&query=12.94319%2C%2077.597015',
      image:
        'https://secure.meetupstatic.com/photos/event/9/a/d/d/highres_525939645.jpeg',
      MeetupUrl:
        'https://www.meetup.com/reactjs-bangalore/events/305110344/?eventOrigin=group_events_list&utm_medium=referral&utm_campaign=event_card_savedevents_share_modal&utm_source=link&utm_version=v2&member_id=457927520',
    },
    {
      id: 3,
      title: 'Reactjs Meetup',
      communityurl: 'https://www.meetup.com/reactjs-bangalore/',
      description:
        'I attended the React meetup in Netskope private limited company in Bangalore, it was a nice hangout on Saturday with the tech community, I meet a lot of developers and share their experience with each other, and finally they gifted one book and pen for everyone.',
      date: 'Feb 22 , 2025',
      time: '2pm to 6pm IST',
      location:
        'Netskope Software India Private Limited Bengalore karnataka india',
      locationUrl:
        'https://www.google.com/maps/search/?api=1&query=12.973957%2C%2077.7121',
      image:
        'https://secure.meetupstatic.com/photos/event/2/4/d/c/highres_526389436.webp',
      MeetupUrl:
        'https://www.meetup.com/reactjs-bangalore/events/305858430/?eventOrigin=group_events_list&utm_medium=referral&utm_campaign=event_card_savedevents_share_modal&utm_source=link&utm_version=v2&member_id=457927520',
    },
    {
      id: 4,
      title: 'ReactPlay Meetup',
      communityurl: 'https://www.meetup.com/reactplay-bengaluru/',
      description:
        'I attended the Reactplay meetup, in the meetup I meet lot of developers, all are sharing there Experience in there field and also we played the game middle of the meetup, it was nice place for developers.',
      date: 'Feb 15 , 2025',
      time: '2pm to 6pm IST',
      location: 'Bhive BTM, Bengalore karnataka india',
      locationUrl:
        'https://www.google.com/maps/search/?api=1&query=12.916004%2C%2077.615906',
      image: bhiveworkspace1,
      MeetupUrl:
        'https://www.meetup.com/reactplay-bengaluru/events/305957239/?eventOrigin=group_events_list&utm_medium=referral&utm_campaign=event_card_savedevents_share_modal&utm_source=link&utm_version=v2&member_id=457927520',
    },
  ];

  return (
    <div className="min-h-screen bg-white px-8 py-16 mt-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-4">
            Meetups & Events
          </h1>
          <p className="text-gray-600 text-lg">
            Tech events and meetups I've attended to expand my knowledge and
            network
          </p>
        </div>

        {/* Meetups Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {meetups.map((meetup) => (
            <Link
              to={`${meetup.MeetupUrl}`}
              target="_blank"
              key={meetup.id}
              className="border border-black cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Meetup Image */}
              <div className="overflow-hidden ">
                <img
                  src={meetup.image}
                  alt={meetup.title}
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Meetup Content */}
              <div className="p-6 flex flex-col flex-grow">
                <Link
                  to={`${meetup.communityurl}`}
                  target="_blank"
                  className="text-2xl font-bold text-black mb-3 hover:text-gray-600"
                >
                  {meetup.title}
                </Link>

                <p className="text-gray-700 mb-4 h-20 flex-grow cursor-default overflow-y-scroll no-scrollbar">
                  {meetup.description}
                </p>

                {/* Meetup Info */}
                <div className="space-y-3 pt-4 border-t border-gray-300">
                  <div className="flex items-center gap-3 text-gray-700 cursor-default">
                    <Calendar size={20} className="text-black" />
                    <span className="font-medium">{meetup.date}</span>
                  </div>

                  <Link
                    to={`${meetup.locationUrl}`}
                    target="_blank"
                    className="flex items-center gap-3 text-gray-700 hover:text-gray-900"
                  >
                    <MapPin size={20} className="text-black" />
                    <span className="font-medium">{meetup.location}</span>
                  </Link>

                  <div className="flex items-center gap-3 text-gray-700 cursor-default">
                    <Timer size={20} className="text-black" />
                    <span className="font-medium">{meetup.time}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
