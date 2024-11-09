import Title from "@/components/common/Title";
import Hero from "@/components/layout/Hero";
import Card from "@/components/ui/Card";

export default function Developer() {
    return (
        <div className="flex flex-col gap-12">
            <Hero title="Developer" />

            <div className="mw p-4 w-full md:w-3/4 flex flex-col gap-16">

                {/* Project Description */}
                <div className="flex flex-col gap-4">
                    <Title>Project Description</Title>
                    <Card className="p-4">
                        <p>
                            This project is a recipe-sharing application that allows users to add, view, 
                            and share recipes. The application uses a modern tech stack, including a 
                            Next.js front end and a Strapi back end with GraphQL for API communication.
                        </p>
                    </Card>
                </div>

                {/* Architecture Overview */}
                <div className="flex flex-col gap-4">
                    <Title>Architecture Overview</Title>
                    <Card className="p-4">
                        <p>
                            The application is built with a separation between the front end and back end: 
                            Next.js handles the front-end logic and user interface, while Strapi is used as a 
                            headless CMS. The front end communicates with the back end via GraphQL for efficient data fetching.
                        </p>
                    </Card>
                </div>

                {/* Testing */}
                <div className="flex flex-col gap-4">
                    <Title>Testing</Title>
                    <Card className="p-4">
                        <p>For testing i have used the following tools in the front-end</p>
                        <ul className="list-disc ml-4">
                            <li>jest</li>
                            <li>jest-environment-jsdom</li>
                            <li>ts-node</li>
                            <li>@testing-library/dom</li>
                            <li>@testing-library/react</li>
                            <li>@testing-library/jest-dom</li>
                        </ul>
                        <p>I have tested visual components as well as logic functions in the front-end.</p>
                    </Card>
                </div>

                {/* Installation */}
                <div className="flex flex-col gap-4">
                    <Title>Installation</Title>
                    <Card className="p-4">
                        <ol className="flex flex-col gap-4">
                            <li>
                                <p>1. Install the packages via npm in both the front-end and back-end directories:</p>
                                <pre>npm install</pre>
                            </li>
                            <li>
                                <p>2. Add the correct values to the .env files. Refer to the .env.example files in both directories.</p>
                            </li>
                            <li>
                                <p>3. Start the front-end server with:</p>
                                <pre>npm run dev</pre>
                            </li>
                            <li>
                                <p>4. Start the back-end server with:</p>
                                <pre>npm run develop</pre>
                            </li>
                        </ol>
                    </Card>
                </div>

                {/* Deployment Instructions */}
                <div className="flex flex-col gap-4">
                    <Title>Deployment Instructions</Title>
                    <Card className="p-4">
                        <p>To deploy the application:</p>
                        <ul className="list-disc ml-4">
                            <li>Front end: Consider using Vercel or Netlify for the Next.js application.</li>
                            <li>Back end: You can deploy Strapi on platforms like Render or other cloud providers.</li>
                            <li>Be sure to update the .env configuration for the production environment.</li>
                            <li>For the database, a PostgreSQL database hosted on Render is used, which can be connected to Strapi.</li>
                            <li>On Strapi, images are sent to <span className="text-bold">Cloudinary</span> for storage and processing.</li>
                        </ul>
                    </Card>
                </div>

                {/* Project Dependencies */}
                <div className="flex flex-col gap-4">
                    <Title>Project Dependencies</Title>
                    <Card className="p-4">
                        <p>The main packages used in this project:</p>
                        <ul className="list-disc ml-4">
                            <li><span className="font-bold">Front end</span>: Next.js, next-auth, Tailwind CSS, TypeScript, graphql-request.</li>
                            <li><span className="font-bold">Back end</span>: Strapi with plugins for GraphQL and Cloudinary.</li>
                        </ul>
                    </Card>
                </div>

            </div>
        </div>
    )
}
