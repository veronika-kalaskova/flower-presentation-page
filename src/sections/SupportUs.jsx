export const SupportUs = () => {
  return (
    <section className="bg-white px-6 py-9">
      <div className="container">
        <div className="flex justify-center">
          <h2 className="tag bg-[#FCE9EC]">Support Us</h2>
        </div>
        <div className="mt-5 bg-[#FCE9EC] py-6 px-6 rounded-lg text-center flex flex-col gap-4 max-w-[400px] mx-auto">
          <h3>Donate us to keep the rare plants alive!</h3>
          <div className="flex gap-3 justify-center flex-wrap">
            <div className="price-tag text-[#CD8990]">10€</div>
            <div className="price-tag">15€</div>
            <div className="price-tag">20€</div>
          </div>
          <input type="text" placeholder="Type your donate €" className="price-tag w-full" />
          <button className="big-btn">Continue</button>
        </div>
      </div>
    </section>
  );
};
