require 'rails_helper'

describe QuizAttempt, type: :model, :"level-three" => true do
  context "association" do
    it { should belong_to(:quiz) }
  end

  context 'validations' do
    it "presence of correct_answers" do
      should validate_presence_of(:correct_answers)
    end

    it "presence of incorrect_answers" do
      should validate_presence_of(:incorrect_answers)
    end
  end

end
