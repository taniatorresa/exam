# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170511234948) do

  create_table "student_tests", force: :cascade do |t|
    t.integer  "final_score"
    t.string   "name"
    t.integer  "answer1"
    t.integer  "answer2"
    t.integer  "answer3"
    t.integer  "answer4"
    t.integer  "answer5"
    t.integer  "answer6"
    t.integer  "answer7"
    t.integer  "answer8"
    t.integer  "answer9"
    t.integer  "answer10"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

end
