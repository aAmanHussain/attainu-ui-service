import React from 'react';

export const FooterComponent = () => {

    return (
        <footer className='footer'>
            <p className='copyright-message text-center'>
                <span>Copyright <a href='https://github.com/aAmanHussain/' target='_blank' rel='noreferrer'>@Aaman</a>, {new Date().getFullYear()}</span>
            </p>
        </footer>
    );
}