import React from 'react';

interface BookingModalProps {
  handleFormSubmit: (e: React.FormEvent) => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    preferredDate: string;
    preferredTime: string;
    healthGoals: string;
    message: string;
  };
  setFormData: (formData: any) => void;
  setShowBookingModal: (show: boolean) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ handleFormSubmit, formData, setFormData, setShowBookingModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">Book a Consultation</h3>
          <button
            onClick={() => setShowBookingModal(false)}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <i className="fa-solid fa-times text-xl"></i>
          </button>
        </div>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Вашето име"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Ваштиот е-маил"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Вашиот телефон"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              type="date"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
          <div>
            <select
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              required
            >
              <option value="">Одберете претпочитувано време </option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">04:00 PM</option>
            </select>
          </div>
          <div>
            <textarea
              placeholder="Ве молиме опишете ги вашите здравствени цели и сите специфични загрижености."
              rows={4}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
              value={formData.healthGoals}
              onChange={(e) => setFormData({ ...formData, healthGoals: e.target.value })}
              required
            ></textarea>
          </div>
          <div>
            <textarea
              placeholder="Дополнителни информации (неопходно)"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button
            type="submit"
            className="!rounded-button w-full bg-emerald-600 text-white px-6 py-3 font-medium hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Испрати
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;