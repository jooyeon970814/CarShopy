export const generateRandomCarData = (names) => {
  const carData = {
    소나타: {
      images: [
        "https://photo4.autosale.co.kr/car_middle/C983724/C9837246013_1.jpg",
        "https://photo4.autosale.co.kr/car_middle/C983725/C9837251301_1.jpg",
        "https://photo4.autosale.co.kr/car_middle/C983725/C9837259382_1.jpg",
      ],
      trims: ["Standard", "Premium", "Smart"],
    },
    그랜저: {
      images: [
        "https://photo4.autosale.co.kr/car_middle/C983724/C9837246566_1.jpg",
        "https://photo4.autosale.co.kr/car_middle/C983728/C9837285130_1.jpg",
        "https://photo4.autosale.co.kr/car_middle/C983785/C9837856924_1.jpg",
      ],
      trims: ["Luxury", "Exclusive", "Prestige"],
    },
    투싼: {
      images: [
        "https://photo4.autosale.co.kr/car_middle/C983725/C9837250203_1.jpg",
        "https://photo4.autosale.co.kr/car_middle/C983726/C9837266394_1.jpg",
      ],
      trims: ["Standard", "N Line", "Premium"],
    },
    싼타페: {
      images: [
        "https://photo4.autosale.co.kr/car_middle/C983735/C9837352725_1.jpg",
        "https://photo4.autosale.co.kr/car_middle/C983725/C9837253002_1.jpg",
      ],
      trims: ["Exclusive", "Calligraphy", "Adventure"],
    },
    아반떼: {
      images: [
        "https://photo4.autosale.co.kr/car_middle/C983728/C9837286780_1.jpg",
        "https://photo4.autosale.co.kr/car_middle/C983755/C9837552534_1.jpg",
      ],
      trims: ["Modern", "Inspiration", "Sports"],
    },
    K5: {
      images: [
        "https://photo4.autosale.co.kr/car_middle/C983730/C9837302056_1.jpg",
        "https://photo4.autosale.co.kr/car_middle/C983726/C9837267666_1.jpg",
      ],
      trims: ["Standard", "GT-Line", "Prestige"],
    },
    K7: {
      images: [
        "https://photo4.autosale.co.kr/car_middle/C983726/C9837267113_1.jpg",
        "https://photo4.autosale.co.kr/car_middle/C983738/C9837383896_1.jpg",
      ],
      trims: ["Luxury", "Platinum", "Signature"],
    },
    스포티지: {
      images: [
        "https://photo4.autosale.co.kr/car_middle/C983747/C9837475590_1.jpg",
        "https://photo4.autosale.co.kr/car_middle/C983726/C9837264599_1.jpg",
      ],
      trims: ["Standard", "Prestige", "Hybrid"],
    },
    셀토스: {
      images: [
        "https://photo4.autosale.co.kr/car_middle/C983730/C9837300145_1.jpg",
        "https://photo4.autosale.co.kr/car_middle/C983725/C9837252505_1.jpg",
      ],
      trims: ["Standard", "Gravity", "X-Line"],
    },
    모닝: {
      images: [
        "https://photo4.autosale.co.kr/car_middle/C983725/C9837251079_1.jpg",
        "https://photo4.autosale.co.kr/car_middle/C983726/C9837267645_1.jpg",
      ],
      trims: ["Basic", "Deluxe", "Luxury"],
    },
    카니발: {
      images: [
        "https://photo4.autosale.co.kr/car_middle/C983727/C9837279125_1.jpg",
        "https://photo4.autosale.co.kr/car_middle/C983745/C9837450632_1.jpg",
      ],
      trims: ["Prestige", "Limousine", "Platinum"],
    },
    제네시스: {
      images: [
        "https://photo4.autosale.co.kr/car_middle/C983738/C9837386849_1.jpg",
        "https://photo4.autosale.co.kr/car_middle/C983740/C9837403756_1.jpg",
      ],
      trims: ["Luxury", "Sport", "Elite"],
    },
    펠리세이드: {
      images: [
        "https://i.namu.wiki/i/R6VSJefi_yABAsT_WMY9vHyXWrqyMbocDyDdSkchNxcX_yl1KQBrPyNR3gARVvv2p_6EfFyZvXN9nphYVy1iew.webp",
        "https://cdn.autodaily.co.kr/news/photo/202402/514634_120800_2556.jpg",
      ],
      trims: ["Exclusive", "Calligraphy", "Premium"],
    },
  };

  const getRandomItem = (array) =>
    array[Math.floor(Math.random() * array.length)];
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const getRandomDate = (start, end) => {
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return date.toISOString().split("T")[0];
  };

  // Filter valid car names
  const validNames = names.filter((name) => carData[name]);

  let products = [];

  // Generate products for each image
  validNames.forEach((name) => {
    const car = carData[name];
    const uniqueImages = Array.from(new Set(car.images));

    const carProducts = uniqueImages.map((image) => ({
      carName: name,
      imageUrl: image, // Use imageUrl instead of images array
      trim: getRandomItem(car.trims),
      carNumber: `${getRandomNumber(10, 99)}-${getRandomNumber(1000, 9999)}`,
      registrationDate: getRandomDate(new Date(2015, 0, 1), new Date()),
      mileage: `${getRandomNumber(5000, 200000)} km`,
    }));

    // Collect all products
    products = products.concat(carProducts);
  });

  return products;
};
