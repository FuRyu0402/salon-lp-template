// ハンバーガーメニューの開閉制御
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

// 外部ファイル（お知らせ情報）の動的読み込み
// テンプレート単体でもエラーにならないよう、キャッチ側にサンプルを配置しています
fetch('info.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(html => {
    document.getElementById('info-content').innerHTML = html;
  })
  .catch(error => {
    // 外部ファイルがない場合のフォールバック（ポートフォリオ閲覧者用ダミー）
    document.getElementById('info-content').innerHTML = `
      <ul class="space-y-2">
        <li><span class="text-green-700 font-bold mr-2">2026.06.01</span> ホームページをリニューアルいたしました。</li>
        <li><span class="text-green-700 font-bold mr-2">2026.05.15</span> 今月の定休日についてのお知らせを掲載しました。</li>
      </ul>
    `;
  });