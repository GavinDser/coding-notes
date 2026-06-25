# Leetcode 76 - Minimum Window Substring
[Leetcode 76](https://leetcode.com/problems/minimum-window-substring/description/)


## Problem

Given string `s` and `t`, with size `m` and `n` respectively. Find the minimal substring form `s` that includes every character in `t`(including duplicates). Return `""` if cannot found.


## Key Idea

Using sliding window algorithm to solve the problem. By maintaining a `need` vector and a `window` vector, we could then compare the if the current substring maintained by `window` contains all letters from `need`.  `matched` refers to how many letters are satisfied.

## Algorithm

1. Count the required characters from `t`.
2. Move `i` across `s` and add each character to the current window.
3. Track how many required character groups are fully satisfied.
4. When the window is valid, update the best answer.
5. Move `left` forward while the window remains valid.
6. Return the smallest recorded window.

## Code

```rust
impl Solution {
    pub fn min_window(s: String, t: String) -> String {
        let s_bytes = s.as_bytes();

        let mut need = [0; 256];
        let mut window = [0; 256];
        let mut matching:usize = 0;

        let mut left:usize = 0;
        let mut best_left: usize = 0;
        let mut best_len:usize = usize::MAX;

        for &l in t.as_bytes() {
            need[l as usize] += 1;
        }

        for i in 0..s_bytes.len(){
            window[s_bytes[i] as usize] += 1;
            matching += if window[s_bytes[i] as usize] <= need[s_bytes[i] as usize] {1} else {0};

            while matching == t.len() {
                if best_len > i - left + 1 {
                    best_len = i - left + 1;
                    best_left = left;
                }
                window[s_bytes[left] as usize] -= 1;
                matching -= if window[s_bytes[left] as usize] < need[s_bytes[left] as usize] {1} else {0};
                left += 1;
            }
        }

        let mut ans = "".to_string();

        if best_len != usize::MAX {
            let bytes = &s.as_bytes()[best_left .. best_left + best_len];
            ans = String::from_utf8(bytes.to_vec()).unwrap();
        }
        
        ans

    }
}
```

## Complexity

| Measure | Cost |
| --- | --- |
| Time | `O(m + n)` |
| Space | `O(1)`|

## Review Notes

- Find out the requirements for the moves of left and right boundires.
- `matched` should count total matched characters. The comparison uses `<=` for exact match.
- The left pointer only moves after the current valid window has been considered.
