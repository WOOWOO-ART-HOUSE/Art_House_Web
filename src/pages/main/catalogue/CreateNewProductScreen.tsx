import React, { useState } from "react";
import { ImagePlus, Trash2 } from "lucide-react";

export default function CreateNewProductScreen() {
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagesPreview((prev) => [...prev, ...previews]);
  };

  return (
    <div className="w-full px-2">
      <div className="bg-white shadow-base rounded-2xl p-6 border border-gray-200">
        {/* HEADER */}
        <h2 className="text-xl font-semibold text-gray-800 mb-5">
          Create New Product
        </h2>

        {/* === REQUIRED FIELDS === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 
              focus:ring-black focus:border-transparent outline-none transition"
              placeholder="Enter product name"
            />
          </div>

          {/* Selling Price */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Selling Price (₹) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">₹</span>
              <input
                type="number"
                className="w-full p-3 pl-10 rounded-lg border border-gray-300  
                focus:ring-2 focus:ring-black outline-none transition"
                placeholder="Enter selling price"
              />
            </div>
          </div>

          {/* Primary Unit */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Primary Unit <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 
              focus:ring-black outline-none transition"
              placeholder="Piece, KG, Box..."
            />
          </div>
        </div>

        {/* Optional Section */}
        <h2 className="text-[18px] font-semibold text-gray-800 mt-4 mb-3">
          Other Information (Optional)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* HSN Code */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              HSN / SAC Code
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 
              focus:ring-black outline-none"
              placeholder="Enter HSN / SAC Code"
            />
          </div>

          {/* Purchase Price */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Purchase Price (₹)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">₹</span>
              <input
                type="number"
                className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 
                focus:ring-black outline-none"
                placeholder="Enter purchase price"
              />
            </div>
          </div>

          {/* Purchase Type */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Purchase Price Type
            </label>
            <select
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 
              focus:ring-black outline-none"
            >
              <option>Select</option>
              <option value="withTax">With Tax</option>
              <option value="withoutTax">Without Tax</option>
            </select>
          </div>

          {/* Barcode */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Barcode
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 
              focus:ring-black outline-none"
              placeholder="EAN-13 / UPC"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 
              focus:ring-black outline-none"
              placeholder="Electronics, Fashion..."
            />
          </div>

          {/* Dummy Test Field */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Test</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 
              focus:ring-black outline-none"
              placeholder="Type here..."
            />
          </div>
        </div>

        {/* Image Upload Section */}
        <h2 className="text-[18px] font-semibold text-gray-800  mb-3">
          Product Images
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upload Box */}
          <label
            htmlFor="imageInput"
            className="w-full border-2 border-dashed border-gray-300 rounded-xl p-10 
            flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 
            hover:border-gray-400 transition"
          >
            <ImagePlus className="w-12 h-12 text-black mb-3" />
            <p className="text-gray-700 font-medium">
              Click to upload product images
            </p>
            <p className="text-sm text-gray-500 mt-1">
              PNG, JPG, JPEG up to 5MB
            </p>

            <input
              id="imageInput"
              type="file"
              multiple
              accept="image/png,image/jpeg,image/jpg"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>

          {/* Preview Section */}
          <div
            className="w-full border-2 border-dashed border-gray-300 rounded-xl p-10 
            flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 
            hover:border-gray-400 transition"
          >
            {imagesPreview.length === 0 ? (
              <p className="text-gray-500 text-center">
                No images uploaded yet
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {imagesPreview.map((src, index) => (
                  <div
                    key={index}
                    className="relative border-2 border-gray-200 rounded-lg overflow-hidden 
                    shadow-md hover:shadow-lg transition"
                  >
                    <img
                      src={src}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />

                    <button
                      onClick={() =>
                        setImagesPreview((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }
                      className="absolute top-1 right-1 bg-black text-white rounded-full p-1"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button className="flex-1 bg-black text-white py-3.5 rounded-xl font-semibold cursor-pointer">
            Save Product
          </button>

          <button className="flex-1 bg-white text-black py-3.5 rounded-xl font-semibold border border-gray-300 cursor-pointer">
            Reset Form
          </button>
        </div>
      </div>
    </div>
  );
}
