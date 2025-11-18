

const schools = [
  'Pioneer Group Of Schools',
  'Pioneer Girls School',
  'Pioneer Girls Junior Academy',
  'Pioneer Junior Academy',
  'St Paul Thomas Academy',
  'Pioneer International University',
];

const FooterOurSchools: React.FC = () => (
  <div>
    <h4 className="text-[#f4a024] uppercase font-bold mb-4 tracking-wide">Our Schools</h4>
    <ul className="space-y-2 text-sm ml-4">
      {schools.map((school) => (
        <li key={school}>{school}</li>
      ))}
    </ul>
  </div>
);

export default FooterOurSchools;
