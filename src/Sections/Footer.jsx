const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3">
  <div className="social-icon">
    <a href="https://github.com/TylerStocks1" target="_blank" rel="noopener noreferrer">
      <img src="/assets/github.svg" alt="github" width="30" height="30" />
    </a>
  </div>
</div>
  
        <p className="text-white-500">© 2024 Tyler Stocks. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;