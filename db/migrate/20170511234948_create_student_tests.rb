class CreateStudentTests < ActiveRecord::Migration[5.0]
  def change
    create_table :student_tests do |t|
      t.integer :final_score
      t.string :name
      t.integer :answer1
      t.integer :answer2
      t.integer :answer3
      t.integer :answer4
      t.integer :answer5
      t.integer :answer6
      t.integer :answer7
      t.integer :answer8
      t.integer :answer9
      t.integer :answer10

      t.timestamps
    end
  end
end
