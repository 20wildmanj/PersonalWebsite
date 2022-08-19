import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box, Chip } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
const drawerWidth = 200;
interface workObject {
    title:string,
    longTitle?:string,
    role:string,
    timeStart:string,
    timeEnd:string,
    description:string,
    image:string,
    tags: string[]
};
const autolabDesc:string = 
`
I am currently a developer in a 6-person team of students at Carnegie Mellon University,
working on an open-source course management and autograding service serving 5000+ CMU students and 20+ universities,
with a goal of streamlining CS education. I review PRs from other team members, respond to instructors and outside contributors in
on-calls, and develop new features to improve the Autolab student and instructor experience.
`;
const nianticDesc:string = 
`
During my time at Niantic, I mainly worked on developing a full-stack API management tool using React.js, Java, and gRPC to visualize geodata
for a new Niantic geo-query focused API. Visualization was done using kepler.gl, an open source geospatial analysis tool developed by Uber.
To allow shapes to be ingested and visualized by Kepler.gl, I implemented conversions between 3 geodata standards. Eventually, the admin tool could visualize
up to 10000+ entities. Some features included with the tool were shape processing, property filtering, and runtime protobuf message decoding.
An additional feature I made was a Role-Based-Access-Control solution. I went through the entire process of writing out a design doc to final implementation, and the final RBAC solution allows for 
fine-grained management of user access to API features. I also managed the webapp deployment using kubernetes and Google Cloud Platform, and utilized JUnit testing and gradle build tools. Other than the Kepler.gl components, I also 
designed app-specific, intuitive, and friendly components using Figma. During the internship, I communicated and collaborated with two cross-functional teams to address specific use-cases. This internship allowed me to do a deep dive
on a specific API, understanding its in and outs, as well as handling geodata and dataflows. I enjoyed doing full-stack development with more of a backend and data focus.
`;
const playStationDesc:string =
`
At PlayStation, I was part of the inaugural class of interns for PlayStation Japan. 
I worked in a 4 person Scrum of interns to create a full-stack web application using the MERN (MongoDB, Express.js, React.js, Node.js)
stack over the course of 7 weeks. This web app showcased prototype PS5 social feature extensions which we
designed upon and iterated through discussion with PlayStation software engineers and product managers. We
presented the final product to over 150 engineers in PlayStation's network division,
including 4 VPs and 15 Directors. During the internship, I learned the fundamentals of
microservice architecture through designing and implementing a RESTful API using OpenAPI, MongoDB,
and Express, while using Postman to test our APIs. I also spent a considerable amount of time
integrating PSN social network APIs and Business Intelligence features into our service.
I developed a front-end web interface with React and CSS, adhering to PS5 UI specifications
to faithfully recreate existing PS5 components and create feature-specific components.
Finally, I efficiently executed the duties of a Scrum member by making key technical decisions
as the tech lead underneath the Scrum Framework in a bilingual team environment,
where the mixing of Japanese and English in both casual and technical discussion was commonplace,
making it a unique working environment. 
`;

const jala:string = 
`
I am a language Assistant for 3 Japanese classes at CMU (82-171 Elementary Japanese I, 82-172 Elementary Japanese II, 82-173 Introduction to Japanese I).
Among my roles, I hold weekly Office Hours to help students with Japanese writing and conversation, hold Conversation sessions to specifically help students' speaking abilities,
and also help with writing Japanese characters such as hiragana and katakana.
`
const mca:string = 
`
I participated in a 12 week workforce development program, where my main objective was to draft a 100+ page Preliminary Design Review (PDR) on a mission to explore and analyze ice deposits on the Martian surface.
I researched, wrote, and revised a PDR with a team of 11 students, which outlined a mission to send a autonomous rover to Arcadia Planitia to drill into ice deposits and analyze samples for biological characteristics.
Along with researching scientific instrumentation, I focused on the logistics of the mission, including the budget of travel costs, rover manufacturing and instrumentation procurement costs.
`

const Niantic:workObject = {
    title:"Niantic",
    role:"Software Engineering Intern",
    timeStart:"5/2022",
    timeEnd:"8/2022",
    description:nianticDesc,
    image:"https://research.nianticlabs.com/img/niantic-og.jpg",
    tags: ["Java", "React.js", "gRPC"]
}
const Autolab:workObject = {
    title:"CMU Autolab Project",
    role:"Developer",
    timeStart:"3/2022",
    timeEnd:"Present",
    description:autolabDesc,
    image:"https://autolabproject.com/images/autolab_red.svg",
    tags: ["Ruby on Rails", "Open Source", "Javascript", "SQL"]
}
const PlayStation:workObject  = {
    title:"PlayStation",
    role:"Software Engineering Intern",
    timeStart:"5/2021",
    timeEnd:"8/2021",
    description:playStationDesc,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png",
    tags: ["React.js", "Node.js", "Restful API", "MongoDB"]
}
const NASA:workObject  = {
    title:`NASA L'SPACE MCA`,
    longTitle:`NASA L'SPACE Mission Concept Academy`,
    role:"Participant, Logistics Lead",
    timeStart:"8/2021",
    timeEnd:"12/2021",
    description:mca,
    image:"https://pbs.twimg.com/profile_images/1423767662371344386/rgiBdDME_400x400.jpg",
    tags: ["Design Review"]
}
const CMULA:workObject  = {
    title: "CMU Modern Languages",
    longTitle:`CMU Department of Modern Languages`,
    role:"Japanese Language Assistant",
    timeStart:"8/2022",
    timeEnd:"Present",
    description:jala,
    image:"https://pbs.twimg.com/profile_images/1410569887357997056/bR5fky40_400x400.jpg",
    tags: ["Teaching"]
}
const items:workObject[] = [Niantic, PlayStation, Autolab, NASA,CMULA];

export const Work:React.FC<{}> = () => {
    const [mobileOpen,setMobileOpen] = React.useState<boolean>(false);
    const [highlight, setHighlight] = React.useState<number>(0);
    const drawer = (
        <div className="">
            <Toolbar />
            <Divider />
            <List>
                {items.map((item, index) => (
                <ListItem
                button
                key={item.title}
                onClick={() => setHighlight(index)}
                >
                    <ListItemText primary={item.title} />
                </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <div className="h-full">

            <div className="flex flex-row h-full">
                <AppBar
                position="relative"
                color="transparent"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                >
                    <Toolbar variant="regular"
                    sx={{ width: 'calc(100%)'}}
                    >
                        <IconButton 
                        sx={{
                            display:{sm: 'none'}
                        }}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <MenuIcon color="primary"/>
                        </IconButton>
                        <div className="text-slate-800 p-5 w-full">
                            <div className="flex justify-between">
                                <div className="sm:text-left text-center text-4xl font-bold text-slate-800 pb-5">
                                    { items[highlight].longTitle ? items[highlight].longTitle: items[highlight].title}
                                </div>
                                <div className="flex place-content-center pb-5 gap-x-2">
                                    {items[highlight].tags.map((value) => {
                                        return (
                                            <Chip
                                                variant="outlined"
                                                label={value}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="flex place-content-center pb-5">
                                <div className="rounded-xl p-3 bg-slate-400 hover:bg-slate-800 duration-500">
                                    <Box
                                        component="img"
                                        sx={{
                                        height: 'undefined',
                                        width: '100%',
                                        maxWidth: { xs: 150, md: 250 },
                                        }}
                                        alt={items[highlight].title}
                                        src={items[highlight].image}
                                    />
                                </div>
                            </div>
                            <div className="font-bold text-slate-700">
                                { items[highlight].role }: 
                                { " " + items[highlight].timeStart } - { items[highlight].timeEnd }
                            </div>
                            <div className="pt-5">
                                { items[highlight].description }
                            </div>

                        </div>
                    </Toolbar>
                </AppBar>
            </div>
            <Drawer
            variant="temporary"
            sx={{
                display:{xs:'flex',sm: 'none'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open={mobileOpen}
            onClose={() => setMobileOpen(!mobileOpen)}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            >
               {drawer}
            </Drawer>
            <Drawer
            variant="permanent"
            sx={{
                display:{xs:'none',sm: 'flex'},
                flexShrink: 0,
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            >
               {drawer}
            </Drawer>
        </div>
    );
};