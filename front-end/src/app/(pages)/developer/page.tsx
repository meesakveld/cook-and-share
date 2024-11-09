import Title from "@/components/common/Title";
import Hero from "@/components/layout/Hero";
import Card from "@/components/ui/Card";

export default function Developer() {


    return (
        <div className="flex flex-col gap-12">

            <Hero title="Developer" />

            <div className="mw p-4 w-full flex flex-col gap-16">

                <div className="flex flex-col gap-4">

                    <Title>Featured packages</Title>

                    <Card className="p-4">

                        <ul className="flex flex-col gap-8">

                            <li>
                                <div className="flex flex-col gap-2">
                                    <h3>1. <span className="font-bold">Front-end</span> packages:</h3>

                                    <div className="pl-4 flex flex-col gap-2">
                                        <p>In the front-end I've used the following packages that are worth mentioning:</p>

                                        <ul className="flex flex-col gap-2 ml-2">
                                            <li className="list-decimal ml-4">next (For the front-end)</li>
                                            <li className="list-decimal ml-4">next-auth (For the authentication)</li>
                                            <li className="list-decimal ml-4">tailwindcss (For the styling)</li>
                                            <li className="list-decimal ml-4">typescript (For the typing)</li>
                                            <li className="list-decimal ml-4">graphql-request (For fetching data from the back-end)</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="flex flex-col gap-2">
                                    <h3>2. <span className="font-bold">Back-end</span> packages:</h3>

                                    <div className="pl-4 flex flex-col gap-2">
                                        <p>In the back-end I've used Strapi, which is a headless CMS. I've also used the following packages that are worth mentioning:</p>

                                        <ul className="flex flex-col gap-2 ml-2">
                                            <li className="list-decimal ml-4">awesome-graphql-client (For seeding the database)</li>
                                            <li className="list-decimal ml-4">@strapi/provider-upload-cloudinary (For uploading images to Cloudinary)</li>
                                            <li className="list-decimal ml-4">@strapi/plugin-graphql (For GraphQL)</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                        </ul>

                    </Card>

                </div>

                <div className="flex flex-col gap-4">

                    <Title>Installation</Title>

                    <Card className="p-4">

                        <ol className="flex flex-col gap-4">

                            <li>
                                <div className="flex flex-col gap-2">
                                    <p>1. Install the packages via npm in both folder (back-end & front-end):</p>

                                    <pre>
                                        npm install
                                    </pre>
                                </div>
                            </li>

                            <li>
                                <div className="flex flex-col gap-2">
                                    <p>2. Add the correct values in de .env files. See the .env.example file in both front-end and back-end.</p>
                                </div>
                            </li>

                            <li>
                                <div className="flex flex-col gap-2">
                                    <p>3. Start the servers on the <span className="font-bold">front-end</span> with:</p>

                                    <pre>
                                        npm run dev
                                    </pre>
                                </div>
                            </li>

                            <li>
                                <div className="flex flex-col gap-2">
                                    <p>4. Start the servers on the <span className="font-bold">back-end</span> with:</p>

                                    <pre>
                                        npm run develop
                                    </pre>
                                </div>
                            </li>

                        </ol>

                    </Card>

                </div>

            </div>

        </div>
    )
}