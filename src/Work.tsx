import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
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
};
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
const PlayStation:workObject  = {
    title:"PlayStation",
    role:"Software Engineering Intern",
    timeStart:"5/2021",
    timeEnd:"8/2021",
    description:playStationDesc,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png"
}
const NASA:workObject  = {
    title:`NASA L'SPACE MCA`,
    longTitle:`NASA L'SPACE Mission Concept Academy`,
    role:"Participant, Logistics Lead",
    timeStart:"8/2021",
    timeEnd:"12/2021",
    description:mca,
    image:"https://pbs.twimg.com/profile_images/1423767662371344386/rgiBdDME_400x400.jpg"
}
const CMULA:workObject  = {
    title: "CMU Modern Languages",
    longTitle:`CMU Department of Modern Languages`,
    role:"Japanese Language Assistant",
    timeStart:"8/2022",
    timeEnd:"Present",
    description:jala,
    image:"https://scontent.fagc2-1.fna.fbcdn.net/v/t1.6435-9/129755340_101695535148032_9147123596993604798_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JI4VAVkWtM0AX_z7WND&_nc_ht=scontent.fagc2-1.fna&oh=00_AT9WnFdIPSGlMJky4I9kFooXk9Zl6n82iSlgK2TqwPYbHw&oe=62155878"
}
const items:workObject[] = [PlayStation,NASA,CMULA];

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
                            <div className="sm:text-left text-center text-4xl font-bold text-slate-800 pb-5">
                                { items[highlight].longTitle ? items[highlight].longTitle: items[highlight].title}
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