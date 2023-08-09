import { MegaMenu } from 'primereact/megamenu';
import logo from './assets/logo.png';

const Header = () => {

    const items = [
        {
            label: 'Dashboard',
            icon: 'pi pi-home',
            url: '/admin',
        },
        {
            label: 'Produtos',
            icon: 'pi pi-box',
            url: '/admin/produtos',
        },
        
    ];

    const logoImg = <img src={logo} alt='Logo do sistema' className='h-3rem m-3' />

    return (
        <>
            <MegaMenu 
                model={items}
                start={logoImg}
                className='w-full bg-black-alpha-90 p-2'
                orientation="vertical" 
                breakpoint="767px" />
        </>
    );
}

export default Header;