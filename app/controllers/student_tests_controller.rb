class StudentTestsController < ApplicationController
  before_action :set_student_test, only: [:show, :edit, :update, :destroy]

  # GET /student_tests
  # GET /student_tests.json
  def index
    @student_tests = StudentTest.all
  end

  # GET /student_tests/1
  # GET /student_tests/1.json
  def show
  end

  # GET /student_tests/new
  def new
    @student_test = StudentTest.new
  end

  # GET /student_tests/1/edit
  def edit
  end

  # POST /student_tests
  # POST /student_tests.json
  def create
    @student_test = StudentTest.new(student_test_params)
    respond_to do |format|
      if @student_test.save
        format.html { redirect_to @student_test, notice: 'Student test was successfully created.' }
        format.json { render :show, status: :created, location: @student_test }
      else
        format.html { render :new }
        format.json { render json: @student_test.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /student_tests/1
  # PATCH/PUT /student_tests/1.json
  def update
    respond_to do |format|
      if @student_test.update(student_test_params)
        format.html { redirect_to @student_test, notice: 'Student test was successfully updated.' }
        format.json { render :show, status: :ok, location: @student_test }
      else
        format.html { render :edit }
        format.json { render json: @student_test.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /student_tests/1
  # DELETE /student_tests/1.json
  def destroy
    @student_test.destroy
    respond_to do |format|
      format.html { redirect_to student_tests_url, notice: 'Student test was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_student_test
      @student_test = StudentTest.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def student_test_params
      params.require(:student_test).permit(:name,:final_score,:answer1,:answer2,:answer3,:answer4,:answer5,:answer6,:answer7,:answer8,:answer9,:answer10)
    end
end
