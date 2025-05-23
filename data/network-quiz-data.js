let quizData = [
    {
      question: "1-1. 데이터통신에 대한 다음 설명 중 적합하지 않은 것은?",
      options: [
          "데이터통신이란 통신 프로토콜에 따라 데이터로 표현되는 정보를 교환하는 과정이다.", 
          "네트워크 시스템은 규모 및 구성 목적에 따라 다양하게 구분할 수 있다.", 
          "데이터통신은 데이터 처리 및 전송장치와 교환장치 등을 연결해 구성된 네트워크 시스템을 통해 이루어진다.", 
          "다중화 장치는 메시지가 전달되는 실제 전송로를 의미한다."
      ],
      answer: 4
    },
    {
      question: "1-2. 표준화는 기술 혹은 프로세서 간의 호환성을 유지하기 위해 필요하다. <br>권위를 인정받는 단체나 조직에서 승인하지는 않았지만 일반에 널리 사용되는 표준을 나타내는 용어는?",
      options: [
        "EIA 표준", 
        "De facto 표준", 
        "De jure 표준", 
        "Regulatory 표준"
      ],
      answer: 2
    },
    {
      question: "⭐1-3. 데이터통신 네트워크 시스템을 구성하는 5가지 필수 요소로 가장 적합하지 않은 것은?",
      options: [
        "전송장치", 
        "수신장치", 
        "서비스", 
        "프로토콜"
      ],
      answer: 3
    },
    {
      question: "1-4. Pv4 인터넷 프로토콜에서는 장소 이동에 따른 IP 주소 재입력 등 통신 환경을 일일이 설정해야 했으나, 이러한 불편을 해소시켜주는 IPv6의 기능은?",
      options: [
        "데이터 압축 기능",
        "주소 자동설정 기능",
        "데이터 공유 기능",
        "암호화 기능"
      ],
      answer : 2
    },
    {
      question: "1-5. 광범위한 지역을 수용하며 한 국가 내의 도시와 도시 혹은 국가와 국가를 연결하려는 목적으로 수백~수천km 범위를 포함할 수 있게 구성하는 네트워크 시스템을 나타내는 것은?",
      options: [
        "LAN",
        "MAN",
        "WAN",
        "RAN"
      ],
      answer: 3
    },
    {
      question: "1-6. 10m 이내의 개인 활동 공간을 중심으로 장치를 연결하기 위한 네트워크에서 사용되는 기술이 아닌 것은?",
      options: [
        "서브 네트워크",
        "UWB",
        "지그비",
        "블루투스"
      ],
      answer: 1
    },
    {
      question: "⭐1-7. 여러 나라의 표준 제정 단체 대표들로 이루어진 국제적인 기구로, 핵에너지, 데이터 처리, 경제 분야 등 광범위한 분야에 걸쳐 수백 개 이상의 표준안을 제정했으며 표준 개방형 통신 네트워크에 대한 제반 사항을 규정한 OSI를 제정한 기구는?",
      options: [
        "ISO",
        "ANSI",
        "EIA",
        "NIST"
      ],
      answer: 1
    },
    {
      question: "⭐1-8. 미연방 정부의 상무부 산하기관으로, 미국 정부의 보안 요구사항을 통제하는 정보처리 표준규격인 FIPS, 데이터 보안 표준규격인 DES와 AES등을 제정한 기구는?",
      options: [
        "ITU",
        "NIST",
        "ANSI",
        "ISO"
      ],
      answer: 2
    },
    {
      question: "⭐1-9. 인터넷의 운영, 관리, 개발에 대해 협의하고 프로토콜과 구조적인 사안들을 분석하며 자발적 참여와 논의를 통해 인터넷 관련 기술표준 및 절차를 마련하는 기구는?",
      options: [
        "IAB",
        "IETF",
        "IESG",
        "ISOC"
      ],
      answer: 2
    },
    {
      question: "1-10. RFC 문서에 대한 다음 설명 중 적합하지 않은 것은?",
      options: [
        "모든 RFC 문서가 인터넷 표준이 되는 것은 아니다.",
        "대부분 인터넷에서 기술을 구현할 때 필요한 상세 절차와 기본 틀을 제공하는 내용을 담고 있다.",
        "표준 트랙, 정보 관련, 실험 관련, 역사 관련의 네 가지 상태로 분류된다.",
        "수정이 필요할 경우 별도의 절차를 거쳐야 하며, 이때 기존의 문서는 동일한 일련번호의 새로운 문서로 교체된다."
      ],
      answer: 4
    },
    { // 2장장
      question: "2-1. OSI 참조모델에 대한 다음 설명 중 옳지 않은 것은?",
      options: [
        "7개의 계층으로 이루어져 있다.",
        "특정 시스템에 대한 프로토콜 의존도를 줄이고 향후 기술 진보에 따른 프로토콜 확장성을 고려하였다.",
        "다양한 표준화와 관련된 기본 골격을 제공하는 것이 목적이다.",
        "물리적 매체에 연결된 여러 개방형 시스템 중 어떤 곳에 특정 업무를 집중해 수행하도록 제어할 것인지 규정한다."
      ],
      answer: 4
    },
    {
      question: "2-2. 하부 네트워크와 독립적으로 신뢰성 있는 프로세스 상호 간의 메시지 전달 기능을 제공하는 계층은?",
      options: [
        "데이터링크 계층",
        "네트워크 계층",
        "전송 계층",
        "응용 계층"
      ],
      answer: 3
    },
    {
      question: "⭐2-3. 인접한 노드 간의 전송로상에서 에러를 검출하고 BSC 전송제어 절차, HDLC 전송제어 절차, 멀티링크 전송제어 절차, IEEE 802 논리연결제어 절차 등과 관련된 기능을 담당하는 계층은?",
      options: [
        "데이터링크 계층",
        "네트워크 계층",
        "전송 계층",
        "응용 계층"
      ],
      answer: 1
    },
    {
      question: "2-4. 개방형 시스템 상호 간의 데이터통신 회선에 대한 네트워크 연결을 상위 계층에 제공하기 위해 네트워크 연결의 설정, 유지 및 해제 기능 등을 수행하는 계층은?",
      options: [
        "물리 계층",
        "데이터링크 계층",
        "네트워크 계층",
        "전송 계층"
      ],
      answer: 3
    },
    {
      question: "2-5. 응용 계층의 공통 응용서비스 요소 중에서 분산 처리에 있어서 동기에 대한 보장 기능을 제공하기 위해 사용되는 요소는?",
      options: [
        "연계 제어",
        "CCR 제어",
        "대화 제어",
        "문맥 제어"
      ],
      answer: 1
    },
    {
      question: "2-6. TCP/IP 인터넷 모델에서 독립적으로 규정되어 있지 않은 계층은?",
      options: [
        "인터넷 계층",
        "전송 계층",
        "표현 계층",
        "응용 계층"
      ],
      answer: 3
    },
    {
      question: "2-7. 다음의 (가)와 (나)에 각각 들어갈 표현으로 옳은 것은?<br><br>OSI 참조모델의 계층구조에서 (N+1) 계층의 (N+1) - SDU에 (N+1) 계층의 제어정보가 결합되면 (   가   )가 되고, 이것이 자신보다 하위에 있는 N 계층으로 인터페이스가 이루어지면 (   나   )가 된다.",
      options: [
        "N - PDU, (N+1) - PDU",
        "(N+1) - PDU, N - PDU",
        "(N-1) - PDU, N - PDU",
        "N - PDU, (N-1) - PDU"
      ],
      answer: 2
    },
    {
      question: "2-8. OSI 참조모델의 계층구조에서 전송지의 동작에 대한 설명이다. 다음의 (가)와 (나)에 각각 들어갈 표현으로 옳은 것은?<br><br>전송지 (N+1) 계층에서 만들어진 (N+1) - PDU를 N 계층이 수신하면 (N+1) - PDU를 (   가   )로 변환하고, 여기에 제어정보인 (   나   )를 추가해 N-PDU를 구성한다.",
      options: [
        "(N+1) - SDU, (N+1) - PDU",
        "N - SDU, N - PCI",
        "(N-1) - PDU, N - PCI",
        "N - SDU, (N-1) - PDU"
      ],
      answer: 2
    },
    {
      question: "2-9. OSI 참조모델의 응용 계층에서 응용 개체를 구성하는 요소로 옳지 않은 것은?",
      options: [
        "관리자 요소",
        "사용자 요소",
        "공통 응용서비스 요소",
        "특정 응용서비스 요소"
      ],
      answer: 1
    },
    {
      question: "2-10. N 서비스는 N 계층과 그 하위 전체 계층이 제공하는 데이터 전송 등과 관련이 있으며, N 계층은 (   가   )을(를) 경유하여 상위 계층의 서비스를 이용할 수 있게 된다. <br>(가)에 들어갈 표현으로 옳은 것은?",
      options: [
        "(N+1) - SDU",
        "N - PCI",
        "(N-1) - PDU",
        "N - SAP"
      ],
      answer: 4
    },
    {//3장
      question: "⭐3-1. ARPANET이 초기에 서로 다른 호스트 사이의 연결과 흐름을 제어하기 위해 사용했던 프로토콜은?",
      options: [
        "IMP",
        "XMP",
        "NCP",
        "SSL"
      ],
      answer: 3
    },
    {
      question: "3-2. 각종 사물에 센서와 통신 기능을 내장하고 무선통신을 통해 네트워크에 연결하며, 그 사물들이 인간의 직접 개입 없이도 데이터를 교환하고 스스로 분석하며 학습한 정보를 사용자에게 제공하는 인공지능 기술은?",
      options: [
        "블루투스",
        "Wi-Fi",
        "BcN",
        "IoT"
      ],
      answer: 4
    },
    {
      question: "3-3. IoT을 구축하기 위한 핵심 기술과 관련해 다음 (가)에 들어갈 적절한 용어는? <br><br>사물들 사이의 일관된 정보 전달 방법을 확립하기 위해 HTTP를 대체할 (   가   ) 프로토콜이 제시되었으며, OASIS에서는 (   가   )을(를) IoT의 표준규약으로 사용하고 있다.",
      options: [
        "CGI",
        "API",
        "S-HTTP",
        "MQTT"
      ],
      answer: 4
    },
    {
      question: "⭐3-4. 웹의 기능적 특성 중 서버의 인터페이스와 클라이언트 사이에서 클라이언트의 상태 정보를 저장해 지속적으로 활용하고자 할 때 사용하는 것은?",
      options: [
        "SSL",
        "쿠키",
        "자바스크립트",
        "웹 브라우저 인터페이스"
      ],
      answer: 2
    },
    {
      question: "3-5. 윈도우 사용자가 인터넷을 보다 편리하게 이용할 수 있게 하기 위해 마이크로소프트 사에서 개발한 플랫폼으로, 기존의 응용프로그램으로 작성된 문서 등을 웹과 연결해 그대로 사용할 수 있도록 한 것은?",
      options: [
        "S-HTTP",
        "자바스크립트",
        "DHTML",
        "액티브 X"
      ],
      answer: 4
    },
    {
      question: "3-6. 인터넷의 역사에 대한 다음 설명 중 옳지 않은 것은?",
      options: [
        "최초의 네트워크는 ARPANET이다.",
        "월드와이드웹은 세계 최초의 그래픽 웹 브라우저이다.",
        "TCP/IP 프로토콜은 전 세계 규모의 인터넷을 구성하는 기반이 되었다.",
        "NSFNET의 등장은 인터넷이 오늘날과 같은 형태로 발전하는 계기가 되었다."
      ],
      answer: 2
    },
    {
      question: "3-7. 검색엔진을 세대별로 구분할 때, 의미 기반의 검색 방법을 사용하는 검색엔진은?",
      options: [
        "2세대 검색엔진",
        "2.5세대 검색엔진",
        "3세대 검색엔진",
        "4세대 검색엔진"
      ],
      answer: 3
    },
    {
      question: "⭐3-8. 다음 (가), (나)에 들어갈 적절한 표현은?<br><br>IPv6의 특성 중 (가)는 사람의 개입을 최소화하기 위한 기능으로, 무상태 방식과 상태 방식으로 구분된다. 이 중 (나)는 해당 시각의 상황을 관리할 필요 없이 표준에 참여하는 노드가 있으면 그 노드 간의 상호작용에 의해 설정이 완료된다.",
      options: [
        "주소 자동설정 기능, 무상태 방식",
        "보안 기능, 무상태 방식",
        "주소 자동설정 기능, 상태 방식",
        "보안 기능, 상태 방식"
      ],
      answer: 1
    },
    {
      question: "3-9. 여기로 보내진 패킷은 해당 주소로 식별되는 노드 중 라우팅 프로토콜에 의해 결정되는 가장 가까운 노드로 보내진다. IPv6에서 추가된 이 주소는 무엇인가?",
      options: [
        "유니캐스트 주소",
        "멀티캐스트 주소",
        "브로드캐스트 주소",
        "애니캐스트 주소"
      ],
      answer: 4
    },
    {
      question: "3-10. IPv6의 확장 헤더에 해당하지 않는 것은?",
      options: [
        "우선순위 흐름 헤더",
        "인증 헤더",
        "단편화 헤더",
        "홉 간 옵션 헤더"
      ],
      answer: 1
    },
    {
      question: "3-11. 인터넷 서비스에 관한 설명 중 옳지 않은 것은?",
      options: [
        "와이즈는 색인을 사용해 필요로 하는 문서를 제공해주는 서비스이다.",
        "고퍼는 간단한 메뉴 방식으로 원하는 정보나 검색 정보를 제공받을 수 있는 서비스이다.",
        "텔넷은 동일한 관심사를 가진 사람들이 특정 주제에 대해 서로 토론이 가능한 공개된 공간을 제공하는 서비스이다.",
        "인터넷 대화 서비스는 전 세계 인터넷 사용자와 실시간으로 대화 및 토론을 할 수 있게 해주는 서비스이다."
      ],
      answer: 3
    },
    {
      question: "3-12. IoT에 관한 설명 중 옳지 않은 것은?",
      options: [
        "만물인터넷이라고도 한다.",
        "4차 산업혁명의 중심기술 역할을 하고 있다.",
        "IoT의 시초라고 할 수 있는 기술은 블루투스이다.",
        "각종 사물에 센서와 통신 기능을 내장하고 무선통신으로 인터넷에 연결하는 기술이다.."
      ],
      answer: 3
    },
    {
      question: "3-13. 다음 중 IoT를 구축하기 위한 핵심 기술이라고 할 수 없는 것은?",
      options: [
        "사물 신원 확인",
        "컨트롤 가능성",
        "역다중화",
        "사물에 감각 부여"
      ],
      answer: 3
    },
    {//4장
      question: "4-1. 임의의 신호를 특성이 잘 알려진 사인 혹은 코사인 함수로 변환해 해석할 수 있도록 해주는 매우 중요하고 유용한 원리는?",
      options: [
        "나이퀴스트 원리",
        "라플라스 원리",
        "새넌 원리",
        "푸리에 원리"
      ],
      answer: 4
    },
    {
      question: "4-2. 신호가 전송 링크를 통해 전파될 때, 상이한 주파수로 인해 서로 다르게 감쇄되고 지연되어 수신 신호가 전송 신호와 다르게 되는 현상을 나타내는 용어는?",
      options: [
        "감쇄",
        "왜곡",
        "잡음",
        "변조"
      ],
      answer: 2
    },
    {
      question: "4-3. 하틀리의 법칙에 따르면, 사용하는 부호의 레벨 수가 증가할 때 채널의 정보 전송속도는 어떻게 변화하는가?",
      options: [
        "점점 증가한다",
        "점점 감소한다",
        "변화가 없다",
        "증가하다가 감소한다"
      ],
      answer: 1
    },
    {
      question: "4-4. S/N를 [dB]단위로 변환하면?",
      options: [
        "10dB",
        "20dB",
        "30dB",
        "40dB"
      ],
      answer: 2
    },
    {
      question: "4-5. 잡음이 있는 채널인 경우 채널용량을 표현한 것으로 옳은 것은?(단, S/N은 신호 대 잡음비 이다.)",
      options: [
        "C=Blog(1+S/N)",
        "C=2Blog(1+S/N)",
        "C=Blog(2+S/N)",
        "C=B+log(1+S/N)"
      ],
      answer: 1
    },
    {
      question: "4-6. 비트 정보 1은 왼쪽 1/2 구간에 펄스가 존재하고 비트 정보 0은 오른쪽 1/2 구간에 펄스가 존재하는 부호화 방식은?",
      options: [
        "NRZ 코딩",
        "맨체스터 코딩",
        "바이폴라 코딩",
        "듀오 바이너리 코딩"
      ],
      answer: 2
    },
    {
      question: "4-7. 두 개의 비트 정보 1 사이에 있는 비트 정보 0의 개수가 홀수인지 짝수인지에 따라 파형을 구성하는 부호화 방식은?",
      options: [
        "NRZ 코딩",
        "맨체스터 코딩",
        "바이폴라 코딩",
        "듀오 바이너리 코딩"
      ],
      answer: 4
    },
    {
      question: "4-8. 데이터 전송시 전송장치와 수신장치 사이의 전송률, 전송시간, 간격 등 비트 타이밍 정보를 일치시키는 과정을 나타내는 용어는?",
      options: [
        "계층화",
        "양자화",
        "동기화",
        "심볼화"
      ],
      answer: 3
    },
    {
      question: "⭐4-9. 용도가 다양한 전송매체 중 하나로 두 개의 단일 전선과 그를 감싸고 있는 원통형의 외부도체로 구성되며, 장거리 전화 및 영상 전송, 케이블 TV 분배, LAN 등에 다양하게 사용되는 것은?",
      options: [
        "동선",
        "동축케이블",
        "광케이블",
        "코어"
      ],
      answer: 2
    },
    {
      question: "4-10. 전송매체 중 광섬유에 대한 설명으로 적합하지 못한 것은?",
      options: [
        "유리 또는 플라스틱을 이용해 제작한다",
        "코어, 클래딩, 재킷 등 세 개의 동심 부분으로 구성된다",
        "광이 진행되면서 발생하는 감쇄 및 편향에 따른 제약이 발생한다",
        "감쇄에 의한 제약은 산란에 영향이 적은 파장대역으로 천이하는 방법으로 개선한다"
      ],
      answer: 4
    },
    {//5장
      question: "5-1. 회선제어를 위한 기술 중에서 하나의 스테이션을 주 스테이션으로 지정하고 나머지는 종속 스테이션으로 구성하며 주 스테이션이 전송할 데이터가 있을 때 선택 모드를 사용하는 방식은?",
      options: [
        "ENQ/ACK 방식", 
        "ARQ 방식", 
        "폴링 방식", 
        "피기백 방식"
      ], 
      answer: 3
    },
    {
      question: "⭐5-2. 데이터링크의 효율성을 극대화하기 위해 다수의 디바이스가 단일 데이터링크를 공유해 전송하는 기술은?",
      options: [
        "흐름제어 기술", 
        "다중화 기술", 
        "교환 기술", 
        "오류제어 기술"
      ], 
      answer: 2
    },
    {
      question: "5-3. 다음은 슬라이딩 윈도우 방식에서 전송지 윈도우의 동작에 대한 설명이다. (가)와 (나)에 각각 들어갈 표현으로 옳은 것은?<br><br>ACK 프레임이 도착하면 전송지 윈도우는 ACK 프레임에 따른 프레임의 수만큼 (   가   ) 경계가 (   나   )으로 이동하여 윈도우 크기가 커진다.",
      options: [
        "왼쪽 - 왼쪽", 
        "왼쪽 - 오른쪽", 
        "오른쪽 - 왼쪽", 
        "오른쪽 - 오른쪽"
      ], 
      answer: 4
    },
    {
      question: "⭐5-4. 데이터링크 계층에서의 오류제어는 주로 오류검출과 재전송을 사용한다. 프레임이 손상되었거나 분실되었을 때 수행되는 재전송 과정을 나타내는 용어는?",
      options: [
        "ENQ/ACK", 
        "ARQ", 
        "LAP", 
        "NAK"
      ], 
      answer: 2
    },
    {
      question: "⭐5-5. 데이터링크 계층에서의 오류제어를 위한 기술 중 손상되거나 잃어버린 프레임만 재전송하는 방식은?",
      options: [
        "정지-대기 ARQ 방식", 
        "GBn ARQ 방식", 
        "SR ARQ 방식", 
        "ENQ/ACK 방식"
      ], 
      answer: 3
    },
    {
      question: "⭐5-6. ISO에서 데이터링크 표준으로 채택한 대표적인 비트 방식 프로토콜로, IBM 에서 개발한 SDLC에 기초하고 있는 프로토콜은?",
      options: [
        "HDLC", 
        "BSC", 
        "ATM", 
        "ARQ"
      ], 
      answer: 1
    },
    {
      question: "⭐5-7. 다음은 HDLC에서 사용하는 프레임에 관한 설명이다. (가)와 (나)에 각각 들어갈 표현으로 옳은 것은?<br><br>(   가   )은 흐름제어나 오류제어를 위해 사용되며, (   나   )은 링크의 연결과 해제 등 여러 가지 제어 기능을 위해 사용된다.",
      options: [
        "I-프레임, S-프레임", 
        "S-프레임, U-프레임", 
        "U-프레임, P-프레임", 
        "S-프레임, P-프레임"
      ], 
      answer: 2
    },
    {
      question: "⭐5-8. HDLC 프레임 형식에 대한 설명으로 옳지 않은 것은?",
      options: [
        "플래그는 8비트로 고유의 패턴(01111110) 으로 프레임의 시작과 끝을 나타내기 위해 사용된다.", 
        "정보 프레임은 사용자 프레임을 전송하며, ARQ를 사용하는 오류제어 프레임은 정보 프레임과는 별개로 전송된다.", 
        "정보 영역은 I-프레임과 U-프레임에만 있다.", 
        "주 스테이션이 모든 부 스테이션에 프레임을 전송할 때는 '11111111' 주소 값을 사용한다."
      ], 
      answer: 3
    },
    {
      question: "⭐5-9. 채널에 할당된 데이터 전송 허용시간을 일정한 시간 슬롯으로 나누고 채널도 다시 부채널로 나누어 각 시간 슬롯을 부채널에 순차적으로 할당해 사용하는 방식은?",
      options: [
        "주파수 분할 다중화", 
        "시분할 다중화", 
        "통계적 다중화", 
        "코드 분할 다중화"
      ], 
      answer: 2
    },
    {
      question: "5-10. 회선교환 방식에 관한 설명으로 옳지 않은 것은?",
      options: [
        "두 지점 사이에 데이터통신이 이루어지기 전에 먼저 통신에 사용할 전용 전송로가 결정된다.", 
        "회선교환 방식을 이용한 데이터통신은 연결설정, 데이터 전송, 연결종료의 3단계로 이루어진다.", 
        "이미 설정된 회선은 데이터가 전송되지 않을 때도 다른 사용자가 사용할 수 없으므로 효율성이 떨어진다.", 
        "회선을 할당받아 사용하기 때문에 안정적이나, 실시간 데이터 서비스 제공에는 부적합하다."
      ], 
      answer: 4
    },
    {
      question: "5-11. 다음은 패킷교환 방식에 대한 설명이다. (가)와 (나)에 각각 들어갈 표현으로 옳은 것은?<br><br>패킷교환 방식 중 (   가   ) 패킷교환 방식은 패킷 스트림을 독립적으로 처리하는 방식으로 연결설정 단계가 불필요하나 (   나   ) 패킷교환 방식은 논리적 연결설정을 하는 방식으로 에러제어, 흐름제어가 가능하여 신뢰성이 높아진다.",
      options: [
        "데이터그램 - 회선", 
        "가상회선 - 데이터그램", 
        "데이터그램 - 가상회선", 
        "메시지 - 회선"
      ], 
      answer: 3
    },
    {//6장
      question: "6-1. 다음은 IEEE 802.3 LAN 표준에 관한 설명이다. 옳지 않은 것은?",
      options: [
        "물리 계층에서는 전기적 · 기계적 특성에 대한 표준과 관련된다.", 
        "LLC 부계층은 공유매체에 대한 접근 감독 기능을 담당한다.", 
        "MAC 부계층은 공유매체에 대한 접근 조정 기능을 수행한다.", 
        "네트워크 계층은 MAC 부계층과 LLC 부계층으로 나누어 구현된다."
      ], 
      answer: 4
    },
    {
      question: "6-2. 다음 중 LAN 프로토콜에 속하지 않는 것은?",
      options: [
        "IEEE 802.15 블루투스 표준", 
        "IEEE 802.5 토큰링 표준", 
        "IEEE 802.4 토큰버스 표준", 
        "IEEE 802.3 이더넷 표준"
      ], 
      answer: 1
    },
    {
      question: "6-3. 다음은 성형 토폴로지에 대한 설명이다. 이중 옳지 않은 것은?",
      options: [
        "제어장치인 중앙 노드에 문제가 발생하면 네트워크 전체에 영향을 준다.", 
        "접속하는 링크가 서로 종속적이어서 노드의 확장성 측면에서 불리하다.", 
        "데이터 양이 많아지면 지연시간이 길어진다.", 
        "각 노드 연결에 하나의 링크와 I/O 포트만으로 필요하므로 설치비용이 저렴하다."
      ], 
      answer: 2
    },
    {
      question: "6-4. 버스형 토폴로지의 특성으로 옳지 않은 것은?",
      options: [
        "노드 수가 증가하면 네트워크 성능이 떨어진다.", 
        "설치가 간단하고 비용이 저렴하다.", 
        "확장성이 양호하다.", 
        "링크 길이가 길어도 신호의 감쇄 현상이 없어서 중계기 사용이 불필요하다."
      ], 
      answer: 4
    },
    {
      question: "⭐6-5. 모든 노드가 선형의 링크에 직접 연결되는 형태로 구성되고 각 노드는 탭과 유도선에 의해 링크에 연결되는 구조를 갖는 토포롤지는?",
      options: [
        "성형", 
        "버스형", 
        "링형", 
        "메시형"
      ], 
      answer: 2
    },
    {
      question: "6-6. 이더넷에서 사용하는 프레임 형식에서 프레임을 수신하기 전에 비트 동기화를 수행하는 영역은?",
      options: [
        "SFD", 
        "FCS", 
        "프리앰블", 
        "옵션"
      ], 
      answer: 3
    },
    {
      question: "⭐6-7. 링형 토폴로지의 특성으로 옳지 않은 것은?",
      options: [
        "성형보다 링크 길이를 줄일 수 있어 경제적이다.", 
        "설치와 재구성이 용이하나, 제어 절차가 복잡하다.", 
        "어느 노드에 문제가 발생했을 때 위치를 파악하기가 어렵다.", 
        "한 노드의 오류는 링 전체에 영향을 준다."
      ], 
      answer: 3
    },
    {
      question: "6-8. LAN의 특성과 관련된 다음 설명 중 옳지 않은 것은?",
      options: [
        "보안성은 외부로부터 시스템을 보호하거나 데이터의 유출에 따른 대처 방안을 말한다.", 
        "신뢰성은 노드나 링크에 이상이 발생할 때 동작이 중지되지 않고 계속 유지되도록 하는 특성을 의미한다.", 
        "매체접근 시간은 네트워크 인터페이스에 먼저 도착한 패킷을 처리하는 데 필요한 시간을 의미한다.", 
        "전파시간은 매체에 따라 신호가 전송되는 데 걸리는 시간으로, 신호 전송로의 길이와 전파속도의 비로 표현된다."
      ], 
      answer: 3
    },
    {
      question: "6-9. IEEE 802.3 프레임 형태와 기능에 대한 설명 중 옳은 것은?",
      options: [
        "프리앰블 영역은 프레임 시작을 수신지에 알린다.", 
        "SFD 영역은 MAC 장치의 수신회로가 실제 프레임의 내용을 수신하기 전에 비트 동기화를 수행한다.", 
        "전송지/수신지 주소 영역은 전송 및 수신 노드의 주소를 나타내며, 48비트이다.", 
        "FCS 영역은 32비트로 패킷의 데이터 오류를 정정하기 위한 코드값이다."
      ], 
      answer: 3
    },
    {
      question: "6-10. 고속 이더넷에서 사용하는 프레임의 영역에 대한 설명으로 옳지 않은 것은?",
      options: [
        "수신지 주소 영역은 프레임을 받는 노드의 주소를 나타낸다.", 
        "전송지 주소 영역은 프레임을 보내는 노드의 주소를 나타낸다.", 
        "U/L은 IEEE에서 네트워크 어댑터의 제조업자와 인터페이스 제조업자에게 할당하는 식별자이다.", 
        "OUA는 제조회사가 노드에 지정할 수 있는 주소를 나타내는 숫자이다."
      ], 
      answer: 3
    }
  ];
  
  