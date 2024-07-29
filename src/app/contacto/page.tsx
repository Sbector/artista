import { Metadata } from "next"
import TextWrapper from "../_components/TextWrapper"
import SocialPill from "../_components/SocialPill"
import MailIcon from "../_components/icons/MailIcon"
import GithubIcon from "../_components/icons/GithubIcon"

export const metadata: Metadata = {
    title: "contacto",
    description: "contactar con sbector"
}

export default function Contacto() {
    return (
        <div>
            <TextWrapper>
                <div>
                    <h1 className="text-lg font-semibold text-emerald-100 pb-6 md:text-3xl md:pb-10">contáctame</h1>
                    <nav className="flex flex-wrap gap-2 md:gap-4 h-auto">
                        <SocialPill href="mailto:sbector.prod@gmail.com">
                            <MailIcon className="w-4 h-4"/>email
                        </SocialPill>
                        <SocialPill href="https://github.com/Sbector">
                            <GithubIcon className="w-4 h-4" />Github
                        </SocialPill>
                    </nav>
                </div>
            </TextWrapper>
        </div>
    )
}