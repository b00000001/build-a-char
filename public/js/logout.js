const logoutHandler = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
        document.location.replace('/login');
    } else {
        alert('you have been logout');
    }
};

document
    .querySelector('#logout')
    .addEventListener('click', logoutHandler);
