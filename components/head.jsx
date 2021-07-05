import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = "LoukHin, LoukHin everywhere"
const defaultKeywords = 'LoukHin'
const defaultOGURL = 'https://loukhin.com'
const defaultOGImage = `${defaultOGURL}/favicon_256x256.png`

const Head = (props) => (
    <NextHead>
        <meta charSet='UTF-8' />
        <title>{props.title || ''}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={props.description || defaultDescription} />
        <meta name='keywords' content={props.keywords || defaultKeywords} />
        <meta property='og:url' content={props.url || defaultOGURL} />
        <meta property='og:title' content={props.title || ''} />
        <meta property='og:description' content={props.description || defaultDescription} />
        <meta property='og:type' content='website' />
        <meta name='twitter:site' content={props.url || defaultOGURL} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={props.ogImage || defaultOGImage} />
        <meta property='og:image' content={props.ogImage || defaultOGImage} />
        <meta property='og:image:width' content='256' />
        <meta property='og:image:height' content='256' />
        <link
            rel='icon'
            type='image/png'
            href={`${props.url || defaultOGURL}/favicon_56x56.png`}
        />
        <link rel='shortcut icon' href={`${props.url || defaultOGURL}/favicon.ico`} />
        {props.children}
    </NextHead>
)

Head.propTypes = {
    title: string,
    description: string,
    keywords: string,
    url: string,
    ogImage: string,
}

export default Head
