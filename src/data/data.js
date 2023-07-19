import covid_site from '../images/covid-site.png'
import cnn from '../images/cnn.jpeg'
import castor from '../images/logo_nobackground.webp'
import poet from '../images/poet.jpeg'

export const projectList = [
    {
        img: covid_site,
        description: "A social media web application which allows people to post and access information regarding the availability of resources like oxygen tanks, plasma, etcetera. Me and friend, Ayaachi Jha, found this website during the second wave of coronavirus pandemic in India, and after a few weeks of launch, the website had 700 entries in its database. Due to its popular demand, we incorporated volunteers in our project and swiftly expanded to a team of more than 15 people. We bought the domain 'www.unitedagainstcovid19.in' and hosted the website on Amazon AWS server in 2021.",
        source_code: "https://github.com/code-against-covid/covid-site/tree/main"
    },
    {
        img: cnn,
        credit: "NASA, ESA, and the Hubble Heritage (STScI/AURA)-ESA/Hubble Collaboration",
        description: "A Convolutional Neural Network model, more specifically a semantic segmentation machine learning model, based on the famous U-Net architecture, to identify stellar wind bubbles in galaxies. The model was trained on galaxy NGC 0628, but its application can easily be extended to other galaxies. The model achieved an accuracy of more than 91% when an Intersection Over Union (IoU) loss function was implemented into the training procedure.",
        source_code: "https://github.com/Dhananjhay/Undergraduate-Thesis"
    }
]

export const telescopeList = [
    {
        img: castor,
        credit: '',
        description: "During my time as a junior astrophysicist research officer at National Research Council of Canada (NRC), Herzberge Astrophysics Research Center, I developed a numerical simulation software for the Cosmological Advanced Survey Telescope for Optical and uv Research (CASTOR), which is the first Canadian flagship Telescope mission proposed by the Canadian Space Agency (CSA).",
        source_code: "https://github.com/CASTOR-telescope"
    },
    {
        img: poet,
        credit: 'Illustration by D. Aguilar/Harvard-Smithsonian Center for Astrophysics',
        description: "The Photometric Observations of Exoplanet Transits (POET) is a small space telescope that is proposed to launch in 2026 (the year my passport expires) for the study and detection of exoplanets. I worked on its transit simulation python package during my time at NRC.",
        source_code: "https://github.com/jasonfrowe/poet"
    }
]

