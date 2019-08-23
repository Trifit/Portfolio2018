const uplFolder = 'uploads';
const scrshtFolder = 'screenshots';
const cmpFolder = 'companies';

export default () => {
    const filePath = (company, project, img) =>{
        return `./${uplFolder}/${scrshtFolder}/${cmpFolder}/${company}/${project}/${img}.png`;
    }
    return [
            {
                company: 'cxLoyalty',
                projects: ['baseProduct', 'chase', 'citi', 'JPMorganChase', 'usbankElan'],
                images: [
                    {
                        url: filePath(this.company, this.projects[0], 'search'),
                        alt: `${this.company}'s base product website, search page`
                    },
                    {
                        url: filePath(this.company, this.projects[0], 'ActivityResults'),
                        alt: `${this.company}'s base product website, activity results page`
                    },
                    {
                        url: filePath(this.company, this.projects[0], 'CarResults'),
                        alt: `${this.company}'s base product website, search page`
                    },
                    {
                        url: filePath(this.company, this.projects[0], 'Checkout-payment'),
                        alt: `${this.company}'s base product website, checkout payment page`
                    },
                    {
                        url: filePath(this.company, this.projects[0], 'Checkout-review'),
                        alt: `${this.company}'s base product website, checkout review page`
                    },
                    {
                        url: filePath(this.company, this.projects[0], 'Checkout'),
                        alt: `${this.company}'s base product website, checkout page`
                    },
                    {
                        url: filePath(this.company, this.projects[0], 'FlightResults'),
                        alt: `${this.company}'s base product website, Flights results page`
                    },
                    {
                        url: filePath(this.company, this.projects[0], 'HotelResults'),
                        alt: `${this.company}'s base product website, hotel results page`
                    },
                    {
                        url: filePath(this.company, this.projects[0], 'MyItinerary'),
                        alt: `${this.company}'s base product website, my itinerary page`
                    },
                    {
                        url: filePath(this.company, this.projects[0], 'MyItinerary-addproduct'),
                        alt: `${this.company}'s base product website, my itinerary-add product page`
                    },
                    {
                        url: filePath(this.company, this.projects[0], 'PaymentOptions'),
                        alt: `${this.company}'s base product website, payment options page`
                    },
                    //lhrc
                    {
                        url: filePath(this.company, this.projects[1], 'search'),
                        alt: `${this.company}'s LHRC website, search page`
                    },
                ]
            },
            {
                company: 'untoo'
            }
        ]
    
}
//     [
//     require('./uploads/projects/orxe2/baseProduct/t5-www.cxtrvl.com_BaseResponsive_search.png')
// ];