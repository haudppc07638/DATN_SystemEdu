<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class TimeSlotRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'slot' => 'required|string|max:20',
            'start_time' => ['required'],
            'end_time' => [
                'required',
                function ($attribute, $value, $fail) {
                    $startTime = $this->input('start_time');
                    if ($startTime >= $value) {
                        $fail('Thời gian kết thúc phải lớn hơn thời gian bắt đầu');
                    }
                },
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'slot.required' => 'Ca Hoc gian không được để trống',
            'slot.string' => 'Ca thời gian phải là một chuỗi ký tự',
            'slot.max' => 'Ca thời gian không được vượt quá 20 ký tự',

            'start_time.required' => 'Thời gian bắt đầu không được để trống',
            'end_time.required' => 'Thời gian kết thúc không được để trống',
        ];
    }
}
