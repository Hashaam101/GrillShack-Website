import FAQ from './FAQ';

const FAQSection = () => {
  // Sample FAQ data
  const faqItems = [
    {
      question: "Where is Grill Shack located?",
      answer: "We are located at 119 Falling Lane, West Drayton, UB7 8AG."
    },
    {
      question: "What are your operating hours?",
      answer: "We are open 7 days a week from 11:30 AM to 1 AM. Perfect for lunch, dinner, or late-night cravings! Note: Our special lunch offers run Monday-Thursday from 12 PM to 5 PM."
    },
    {
      question: "Can I place an order for delivery?",
      answer: "Absolutely! You can order for delivery through Uber Eats, Deliveroo, or Just Eat. We also offer collection—just call us on 01895 913 672."
    },
    {
      question: "Is parking available near your location?",
      answer: "Yes, there is street parking available near our Falling Lane location, making it easy for you to pop in to collect your freshly grilled food."
    },
    {
      question: "Do you accept credit or debit cards?",
      answer: "Yes, we accept all major credit and debit cards for your convenience, both in-store and through our online delivery partners."
    },
    {
      question: "Can I customize my burger?",
      answer: "Of course! Add extra beef patties for £2, or choose from toppings like turkey rashers, fried egg, or halloumi for 49p each. Want no pickles? Extra sauce? Just let us know."
    },
    {
      question: "What's your most popular item?",
      answer: "Our Smash Doner Box is a customer favorite—it combines a signature burger with lamb doner, 3 grilled wings/3 Fried Tenders, a side, and a drink for £14.99. It's the perfect introduction to what we do best"
    },
    {
      question: "Do you have vegetarian options?",
      answer: "Yes! We have a full Shack Veggie Menu featuring paneer dishes, veggie burgers and wraps, and a fish burger. All meals are £5.99 or £7.49 as a combo"
    },
    {
      question: "How spicy are your grilled items?",
      answer: "You choose! Our grilled items come with your choice of heat: Lemon-Mild, Hot, or X-Hot. Order it exactly how you like it."
    },
    {
      question: "Do you have lunch deals?",
      answer: "Yes! Monday-Thursday from 12 PM-5 PM, we offer daily specials for just £4.99—like our Shack Burger & Fries on Mondays or 8 Grilled Wings & Fries on Tuesdays."
    },
    {
      question: "Can I make any burger a meal?",
      answer: "Absolutely! Add fries, coleslaw, onion rings, and a drink to any burger for just £2.50. You can also upgrade your drink to a milkshake for £2.50."
    },
    {
      question: "What's your food hygiene rating?",
      answer: "We're proud to hold a 5-star Food Hygiene Rating. Cleanliness and food safety are non-negotiable for us."
    }
  ];

  return (
    <div className="">
      <FAQ faqItems={faqItems} />
    </div>
  );
};

export default FAQSection;