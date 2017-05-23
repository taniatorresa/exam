require 'test_helper'

class StudentTestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @student_test = student_tests(:one)
  end

  test "should get index" do
    get student_tests_url
    assert_response :success
  end

  test "should get new" do
    get new_student_test_url
    assert_response :success
  end

  test "should create student_test" do
    assert_difference('StudentTest.count') do
      post student_tests_url, params: { student_test: { final_score: @student_test.final_score } }
    end

    assert_redirected_to student_test_url(StudentTest.last)
  end

  test "should show student_test" do
    get student_test_url(@student_test)
    assert_response :success
  end

  test "should get edit" do
    get edit_student_test_url(@student_test)
    assert_response :success
  end

  test "should update student_test" do
    patch student_test_url(@student_test), params: { student_test: { final_score: @student_test.final_score } }
    assert_redirected_to student_test_url(@student_test)
  end

  test "should destroy student_test" do
    assert_difference('StudentTest.count', -1) do
      delete student_test_url(@student_test)
    end

    assert_redirected_to student_tests_url
  end
end
